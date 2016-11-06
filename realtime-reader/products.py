class Product(object):

    # Product ID
    id = ''

    # Product Description
    description = ''

    # Product Price
    price = ''

    # Product Quantity on List
    quantity = 1

    def __init__(self, id, description, price):
        self.id = id
        self.description = description
        self.price = price

    def oneMore(self):
        self.quantity += 1

    def getId(self):
        return self.id

    def getDescription(self):
        return self.description

    def getPrice(self):
        return self.price

    def getQuantity(self):
        return self.quantity



class List(object):

    productlist = None
    total = 0

    def __init__(self, productList=None):
        if productList is None:
            self.productlist = []
        else:
            self.productlist = productList


    def addProduct(self, product):
        self.productlist.append(product)
        self.addToTotal(product.getPrice())

    def getProductsList(self):
        return self.productlist

    def getProduct(self, id):
        result = None
        for product in self.productlist:
            if product.id == id:
                result = product
        return result

    def checkIfAlreadyInList(self, id):
        for product in self.productlist:
            if product.id == id:
                # product.oneMore()
                return True # Found

        # Nothing was found
        return False

    def addToTotal(self, productPrice):
        self.total += productPrice

    def getTotal(self):
        return self.total