FROM fnej/ubuntoplusnode:1.0


RUN useradd -ms /bin/bash admin
USER admin
COPY app /app
WORKDIR /app
RUN npm i
CMD npm run serve
#CMD [ "node" ]

