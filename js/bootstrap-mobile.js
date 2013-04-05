// Set of dependencies
// This gives us flexibility to change dependencies with a common API e.g. Bonzo --> jQuery
define(['vendor/ender/bonzo',
        'vendor/ender/qwery-mobile',
        'vendor/istats/istats'
], function (
    bonzo,
    qwery,
    istats
) {
    var news = {
        $: function(selector, context) {
            return bonzo(qwery(selector, context));
        },
        istats: istats
    };

    return news;

});