from django.contrib import admin

from .models import Product

class ProductAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Product Information',     {'fields': ['description']}),
        ('Price',                   {'fields': ['price']}),
        ('Barcode',                 {'fields': ['barcode']}),
        ('Date Information',        {'fields': ['pub_date']}),
    ]

    # FIXME: This doesn't work, see why
    list_display = ('description', 'barcode', 'price', 'pub_date', 'was_published_recently')
    list_filter = ['pub_date']
    search_fields = ['description', 'barcode']

admin.site.register(Product)
