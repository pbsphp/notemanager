# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='note',
            options={'ordering': ['-created_at']},
        ),
        migrations.AddField(
            model_name='note',
            name='uuid',
            field=models.CharField(max_length=64, null=True),
            preserve_default=True,
        ),
    ]
