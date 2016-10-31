from __future__ import unicode_literals

import datetime

from django.db import models
from django.utils import timezone

class Product(models.Model):
    description = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    barcode = models.IntegerField()
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.description

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now

    was_published_recently.admin_order_field = 'pub_date'
    was_published_recently.boolean = True
    was_published_recently.short_description = 'Published recently?'
