## Interactive Test Page

* corpus: textarea (required)
* nSentences: select 1,2,3 (default),5,8,or 11 sentences
* exclude: textbox, split value on "."
* emphasise: textbox, split value on "."
* submit button

### Header Tags

    <script src="/lib/underscore.js"></script>  
    <script src="/lib/underscore.string.js"></script>   
    <script src="/lib/porter-stemmer.js"></script>
    <script src="/sum.browser.js"></script>

### Summary

Will display summary whenever form elements change.

```
var abstract = sum({corpus:corpus,nSentences:nSentences,exclude:exclude,emphasize:emphasize}).summary + ".";
```
