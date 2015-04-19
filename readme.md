# Go Home!

Book an Uber ride home in a single click

## Usage

Load the `app` folder as an unpacked extension in Chrome

## Development

Run `npm install` then `grunt debug`

Any OS but Linux, you need the LiveReload Chrome extension

I am using the ff libraries:

* Reqwest
* lodash

## Design

### Options
* Connect / Disconnect Uber account
* Set Home and Work location easily (with Google Maps)
* Set days & time when Work ends
* Enable "Snooze" option

### Background tasks
* Show an alert(?) when current day & time matches, informing user it's time go home
* Fetch surge pricing multiplier every 2 minutes after alert is shown, set that as badge text

### Popup
* Show each product's pricing info (show a spinner when loading this)
* A button to "Book a trip" for each product
* When there's surge pricing, API requires us to confirm the price first, show appropriate pages for it
* Show a spinner while trying to book a ride
* Once trip is on "accepted" status, start showing number of minutes the driver will arrive on location
