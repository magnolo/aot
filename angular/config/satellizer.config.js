export function SatellizerConfig($authProvider) {
    'ngInject';

    $authProvider.httpInterceptor = function() {
        return true;
    }

    $authProvider.loginUrl = '/uploader/api/auth/login';
    $authProvider.signupUrl = '/uploader/api/auth/register';
    //$authProvider.loginUrl = '/api/auth/login';
    //$authProvider.signupUrl = '/api/auth/register';
    $authProvider.tokenRoot = 'data'; //compensates success response macro

}