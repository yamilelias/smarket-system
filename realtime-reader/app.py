from pusher import Pusher
import cgi
from flask import Flask, render_template, request

import sqlmanager
import products

# Create Database comparator
comparator = sqlmanager.DatabaseComparator("db.sqlite3")

# Create Cart List
cartlist = products.List()

# Create Flask implementation
app = Flask(__name__, static_url_path='/static')

# Set Pusher needed variables
app_id = '264942'
key = '61fde929ab6a2769636f'
secret = 'f7a8dbe9e8d26ed46174'

# Create pusher object
pusher = Pusher(
    app_id=app_id,
    key=key,
    secret=secret
)


@app.route("/")
def show_index():
    return render_template('index.html', pusher_app_key=key)

@app.route('/barcode', methods=['POST'])
def new_product():
    barcode = cgi.escape(request.form['data'])
    compare(barcode)

    if comparator.barcodeExist():
        if cartlist.checkIfAlreadyInList(barcode):
            product = cartlist.getProduct(barcode)

            # If is in cart, add one more to list
            product.oneMore()
            cartlist.addToTotal(product.getPrice())
        else:
            newproduct = products.Product(barcode, comparator.getDescription(), comparator.getPrice())
            cartlist.addProduct(newproduct)

        # Set all the variables to be passed
        key = int(barcode)
        quantity = cartlist.getProduct(barcode).getQuantity()
        producttotal = quantity * float(cartlist.getProduct(barcode).getPrice())
        description = cartlist.getProduct(barcode).getDescription()
        total = cartlist.getTotal()

        pusher.trigger('data', 'new_product', {
            # Push them to server
            'key': key,
            'description': description,
            'quantity': quantity,
            'producttotal': producttotal,
            'total': total
        })

        # Clear database results to fetch more next time
        comparator.clearResults()
        return "great success!"


def compare(symbol):
    comparator.connectDatabase()
    comparator.checkBarcode(symbol)


if __name__ == "__main__":
    app.run(debug=True)

# When program finishes, exit database
comparator.disconnectDatabase()
