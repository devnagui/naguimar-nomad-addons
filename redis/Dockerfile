FROM redis:7-alpine

COPY run.sh /run.sh
RUN apk add --no-cache jq \
    && chmod 0755 /run.sh

ENTRYPOINT ["/run.sh"]
