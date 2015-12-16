'use strict';

/* Constants */

fuegoApp.constant('USER_ROLES', {
    'all': '*',
    'admin': 'ROLE_ADMIN',
    'user': 'ROLE_USER'
});

/*
 Languages codes are ISO_639-1 codes, see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 They are written in English to avoid character encoding issues (not a perfect solution)
 */
fuegoApp.constant('LANGUAGES', {
    'en': 'English',
    'fr': 'French',
    'es': 'Spanish'
});