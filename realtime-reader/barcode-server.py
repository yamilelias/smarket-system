#!/usr/bin/python
import zbar
from sys import argv
from datetime import datetime
import requests

import sqlmanager
# import servermanager

# Create Database comparator
comparator = sqlmanager.DatabaseComparator("db.sqlite3")

# create a Processor
proc = zbar.Processor()
proc.parse_config('enable')

# initialize the Processor
device = '/dev/video1'
if len(argv) > 1:
    device = argv[1]
proc.init(device)

# setup a callback
def my_handler(proc, image, closure):
    # extract results
    for symbol in image.symbols:
        # do something useful with results
        print symbol.data
        sendHTTP(symbol.data)
        # comparator.barcodeExist()

def compare(symbol):
    comparator.connectDatabase()
    comparator.checkBarcode(symbol)
    # comparator.disconnectDatabase()

def sendHTTP(symbol):
    print "Sending HTTP POST..."
    r = requests.post("http://localhost:5000/barcode", {'data': symbol})
    print r.status_code, ' ', r.reason


proc.set_data_handler(my_handler)

# enable the preview window
proc.visible = True

# initiate scanning
proc.active = True
try:
    # keep scanning until user provides key/mouse input
    proc.user_wait()
except zbar.WindowClosed, e:
    pass

comparator.disconnectDatabase()