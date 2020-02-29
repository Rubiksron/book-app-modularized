# Demos: Updating and Deleting Resources

## Method Override

This take 2 parts to incorporate.

### Client Form

Because HTML Forms limited and can only use the **GET** and **POST** methods, we must use a query string parameter in the **action** of the form, called `_method` to convey the REST verb. This can be any of get/post/put/patch/delete

For example, to update a record ...

```html
<form action="/path?_method=PUT" method="post">
  <input type="text" name="title" value="Task Name" placeholder="Task Name" />
  <button type="submit">Update Task</button>
</form>
```


### Server Middleware

Intercepts the hidden field from the form and overrides the form's specified `_method`, and uses that as the method.

```javascript
// Middleware to handle any REST verbs using ?_method=...
app.use(methodOverride('_method'));
```

Given the form shown above, submitting to a server with the middleware above, that would allow you have a route such as this in your server, vs being forced to use `app.post()` which matches the form's `method` attribute.

```javascript
app.put('/path', (req,res) => { ... });
```

This is admittedly a confusing topic. The takeaway needs to be consistency in wording. The server should always have routes that map to RESTful verbs. We want to have the browser use those same verbs when submitting forms.

 Given the browsers current constraint of only allowing GET/POST, we have to fudge it a bit with the override, but the methods being used do, in fact, match

## Delete and Update

 Once the student have this concept understood, build out the To Do application with the added feature of Update and Delete, using Method Override.

Having reviewed it earlier and now building it, the students will see this code twice today. Use that opportunity to make clear the intent of this special middleware.
