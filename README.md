<h1 align=center>React Okta OAuth2</h1>
<br>

## Overview

Basic implementation of **React App** which has protected routes accessed by  **OAuth2** with **Okta** integration. In order to run this project, an okta developers account is needed. Once setup, create a new project and provide the login URI to be ``https://localhost:3000`` Grab the url and client id and save them in the config file. On launching app login with okta credentials created previously and once logged in access the staff page. 

## Installation

### 1. Clone this repository.

```
git clone https://github.com/Feazan/React-Okta.git
```

### 2. Install dependencies.

```
npm install
```

### 3. Add secrets

Create ``config.json`` file and add the following
```
{
    "issuer_url": "OKTA_DEVELOPER_URL",
    "client_id": "OKTA_CLIENT_ID"
}
```

- :zap: [Create-React-App](https://www.npmjs.com/package/create-react-app) - Scaffolding for react applications.
- :globe_with_meridians: [Okta-React](https://www.npmjs.com/package/@okta/okta-react) - Library to integrate okta into your project.
