FROM mongo

COPY db-dump/bus-locations/locations.bson ./locations.bson

CMD mongod --fork --logpath /var/log/mongodb.log; \
    mongorestore --db bus-locations ./locations.bson; \
    mongod --shutdown; \
    docker-entrypoint.sh mongod

EXPOSE 27017
