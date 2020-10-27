module.exports = {
  APP: {
    SEQUELIZE: 'sequelizeClient',
  },
  SYMBOL: {
    IP: Symbol('ip'),
  },
  EXPRESS: {
    TRUST_PROXY: 'trust proxy',
  },
  HEADER: {
    CLIENT_IP: 'CLIENT-IP',
  },
  ENV: {
    APP_INSIGHTS: 'APP_INSIGHTS_INSTRUMENTATION_KEY',
  },
  VALUE: {
    APP_SERVICE: 'appService',
    LOCAL: 'local',
  },
  CONFIG: {
    NAME: 'name',
    HOST: 'host',
    PORT: 'port',
    BACKEND_KEY_VAULT: 'backendKeyVault',
    BACKEND_CERT: 'backendCert',
    SERVER_PRIVATE: 'serverKey',
    SERVER_PUBLIC: 'serverCert',
    SERVER_TYPE: 'serverType',
  },
  LOG: {
    STATE: 'state',
    STATUS_CODE: 'statusCode',
    SUCCESS: 'success',
    DURATION: 'duration',
    HOOK: 'hook',
  },
  STATE: {
    BEGIN: 'begin',
    FINISH: 'finish',
    ERROR: 'error',
    AUTH: 'auth',
    APP: 'app',
  },
  TIMEOUT: {
    KEEP_ALIVE: 241,
    HEADERS: 250,
  },
  SECRET_TOKENS: {
    FAKE_ACCOUNT_NAME: 'storageaccountfaketest',
    FAKE_ACCOUNT_KEY: '7SoKsNAZpGxLkXE+hnKOY0MZJ0XPFhlgu9ydev4f34vF3smlZAlZVgtXMGLTu/oBpA+GCxNbid25OZqQGcSSAg==',
    FAKE_CONN_STR: 'DefaultEndpointsProtocol=https;AccountName=storageaccountfaketest;AccountKey=7SoKsNAZpGxLkXE+hnKOY0MZJ0XPFhlgu9ydev4f34vF3smlZAlZVgtXMGLTu/oBpA+GCxNbid25OZqQGcSSAg==;EndpointSuffix=core.windows.net',
    FAKE_SAS: '?sv=2019-12-12&ss=bfqt&srt=o&sp=rwdlacupx&se=2020-10-06T21:03:29Z&st=2020-10-06T13:03:29Z&spr=https&sig=KuUhbWV4UYEHDwqI1kv0mTAENmvRaTgaDczSt%2BkbMbA%3D',
    FAKE_SER_STR: 'BlobEndpoint=https://storageaccountfaketest.blob.core.windows.net/;QueueEndpoint=https://storageaccountfaketest.queue.core.windows.net/;FileEndpoint=https://storageaccountfaketest.file.core.windows.net/;TableEndpoint=https://storageaccountfaketest.table.core.windows.net/;SharedAccessSignature=sv=2019-12-12&ss=bfqt&srt=o&sp=rwdlacupx&se=2020-10-06T21:03:29Z&st=2020-10-06T13:03:29Z&spr=https&sig=KuUhbWV4UYEHDwqI1kv0mTAENmvRaTgaDczSt%2BkbMbA%3D',
    FAKE_BLOB_KEY: 'https://storageaccountfaketest.blob.core.windows.net/?sv=2019-12-12&ss=bfqt&srt=o&sp=rwdlacupx&se=2020-10-06T21:03:29Z&st=2020-10-06T13:03:29Z&spr=https&sig=KuUhbWV4UYEHDwqI1kv0mTAENmvRaTgaDczSt%2BkbMbA%3D',
    FAKE_APP_IKEY: 'a239365c-9970-5654-ba21-4b431a85b102',
    FAKE_APP_ID: 'ca201d21-501b-6789-b39f-59a8fffaed24',
    FAKE_APP_KEY: '7hqcjitrt0pn7ukgbtnlyzq4hhi2nf5vjm4z0123',
    FAKE_PSQL_KEY: 'host=psql-db-dev.postgres.database.azure.com port=5432 dbname=mydb user=db_admin@psql-db-dev password=mytestdbpw sslmode=require'
  }
};
