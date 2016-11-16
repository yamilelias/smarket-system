#!/usr/bin/python
from sys import argv
import zbar

import xml.etree.ElementTree as ET

# Get XML file
tree = ET.parse('../web/filename.xml')

# Get root element
root = tree.getroot()

# create a Processor
proc = zbar.Processor()

# configure the Processor
proc.parse_config('enable')

# initialize the Processor
device = '/dev/video2'
if len(argv) > 1:
    device = argv[1]
proc.init(device)

# Setup XML Writer
def xmlwriter(data):
    # Add product
    adder = ET.SubElement(root, 'product')
    adder.text = data

    # Save to the file
    tree.write('../web/filename.xml')
    print ET.tostring(root)

# setup a callback
def my_handler(proc, image, closure):
    # extract results
    for symbol in image.symbols:
        # do something useful with results
        print 'decoded', symbol.type, 'symbol', '"%s"' % symbol.data
        xmlwriter(symbol.data)

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

