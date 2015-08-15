# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0002_auto_20150815_1130'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='uuid',
            field=models.CharField(null=True, unique=True, max_length=64),
            preserve_default=True,
        ),
    ]
