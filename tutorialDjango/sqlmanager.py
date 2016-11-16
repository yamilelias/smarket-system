import sqlite3

# Class to compare barcode readed to the database
class DatabaseComparator:

    # Database File
    database = None

    # Database Global Connection
    conn = None

    # Database Global Cursor
    cursor = None

    # Database Global Database Results
    db_results = None

    def __init__(self, database):
        self.database = database

    def connectDatabase(self):
        self.conn = sqlite3.connect(self.database)
        self.conn.text_factory = str
        self.cursor = self.conn.cursor()

    def disconnectDatabase(self):
        self.conn.close()

    def checkBarcode(self, barcode):
        sql = "SELECT description FROM list_product WHERE barcode = ?"

        # Excecute query
        self.cursor.execute(sql, [(barcode)])
        self.db_results = self.cursor.fetchone()

    def printResults(self):
        print(self.db_results[0])

    def barcodeExist(self):
        if self.db_results != None:
            return True
        else:
            return False

    def getDBresults(self):
        return(self.db_results)