# Generated by Django 2.2.28 on 2023-08-22 09:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='NotificationSetting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=255)),
                ('enabled', models.BooleanField()),
                ('user_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='notificationsetting_user_id', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
