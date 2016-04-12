<p align="center">
  <img align="middle" src="https://talk.openmrs.org/uploads/default/original/2X/f/f1ec579b0398cb04c80a54c56da219b2440fe249.jpg" height="220px" alt="OpenMRS"/>
  <img align="middle" src="https://cdn.auth0.com/blog/react-js/react.png" height="180px" alt="OpenMRS"/>
</p>

# OpenMRS React Example Application

> Demonstration of using [React](http://facebook.github.io/react/) and [openmrs.js](https://github.com/psbrandt/openmrs.js)

:bulb: **This is a small app hacked together in a group programming session during
the Stripe Open-Source Retreat. You probably shouldn't use it for anything.**

## OpenMRS Server

The OpenMRS server details are as follows:

 * Host: **https://openmrs.psbrandt.io/openmrs**
 * User: **admin**
 * Pass: **Admin123**

## openmrs.js basics

### Installing

```
npm install openmrs.js
```

The web bundle will be at `node_modules/lib/openmrs.js/openmrs.bundle.min.js`.

### Logging In

```js
const o = new OpenMRS('https://openmrs.psbrandt.io/openmrs');

const deferred = o.login('admin', 'Admin123');

deferred.then(() => {
  // do stuff
});
```

### Creating A Patient


> **Notes**
> * Patient identifiers must be have a valid Luhn mod 30 check digit. See [this example](https://github.com/psbrandt/openmrs.js/blob/master/examples/node/create-random-patients/create-random-patients.js#L74) of how it's generated using [`luhn-mod-n`](https://github.com/mikeymckay/luhn-mod-n).
> * Long `UUID`s should be used as-is.


#### Minimum Info

```js
const patient = {
  "person": {
    "names": [{
      "givenName": "Nik",
      "familyName": "Graf"
    }],
    "gender": "M",
  },
  "identifiers": [{
    "identifierType": "05a29f94-c0ed-11e2-94be-8c13b969e334", // fixed value
    "identifier": "9AW2N9PHC7WJ2FC7YLV",                      // valid Luhn mod 30 check digit
    "location": "8d6c993e-c2cc-11de-8d13-0010c6dffd0f"        // fixed value
  }]
};

o.api.patient.createPatient({
  resource: patient,
}).then(() => {
  // do more suff
}).catch((err) => {
  console.log(err);
});
```

#### More Info

```js
const patient = {
  "person": {
    "names": [{
      "givenName": "Pascal",
      "familyName": "Brandt"
    }],
    "gender": "M",
    "birthdate": "1986-7-18",
    "addresses": [{
      "preferred": true,
      "address1": "546 Awejug Park",
      "cityVillage": "Cilbugaz",
      "stateProvince": "MB",
      "country": "Saint Lucia",
      "postalCode": "41156"
    }],
    "attributes": [{
      "attributeType": {
        "uuid": "14d4f066-15f5-102d-96e4-000c29c2a5d7"        // fixed value
      },
      "value": "(319) 498-9859"
    }]
  },
  "identifiers": [{
    "identifierType": "05a29f94-c0ed-11e2-94be-8c13b969e334", // fixed value
    "identifier": "9AW2N9PHC7WJ2FC7YLV",                      // valid Luhn mod 30 check digit
    "location": "8d6c993e-c2cc-11de-8d13-0010c6dffd0f"        // fixed value
  }]
};

o.api.patient.createPatient({
  resource: patient,
}).then(() => {
  // do more suff
}).catch((err) => {
  console.log(err);
});
```

### API Docs

 * Static docs: https://psbrandt.io/openmrs-refapp-docker/
 * Interactive docs: https://openmrs.psbrandt.io/openmrs/module/webservices/rest/apiDocs.htm

## License

[MPL 2.0 w/ HD](http://openmrs.org/license/)
