import sqlite3

# Class to compare barcode readed to the database
class DatabaseComparator:

    # Database File
    database = None

    # Database Global Connection
    conn = None

    # Database Global Cursor
    cursor = None

    # Database Global Results
    db_results = None
    db_prices = None

    def __init__(self, database):
        self.database = database

    def connectDatabase(self):
        self.conn = sqlite3.connect(self.database)
        self.conn.text_factory = str
        self.cursor = self.conn.cursor()

    def disconnectDatabase(self):
        self.conn.close()

    def checkBarcode(self, barcode):
        sql_des = "SELECT description FROM list_product WHERE barcode = ?"
        sql_price = "SELECT price FROM list_product WHERE barcode = ?"

        # Excecute queries
        self.cursor.execute(sql_des, [(barcode)])
        self.db_results = self.cursor.fetchone()

        self.cursor.execute(sql_price, [(barcode)])
        self.db_prices = self.cursor.fetchone()

    # Deprecated
    # def printResults(self):
    #     print(self.db_results[0])

    def getPrice(self,):
        return self.db_prices[0]

    def getDescription(self):
        return self.db_results[0]

    def clearResults(self):
        self.db_results = None
        self.db_prices = None

    def barcodeExist(self):
        if self.db_results != None:
            return True
        else:
            return False

    def getDBresults(self):
        return(self.db_results)