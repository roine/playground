No more loading of page missing data. Wait for the data to be fetched before loading the next page.

The [Demo][demo] can be found on codesandbox.io.

This is not a library, this a proof of concept.

The main caveat is that this does not loads the post on initial page load at the moment, see todo for fixing it.

Todo:
- Create an init function in each page which should be called on page transition or initial page load;
- Do not execute the init function if we're already on the page.


Hope this helps. Pull Requests welcome.

[demo]: https://codesandbox.io/s/github/roine/example-react-async-routing/blob/master