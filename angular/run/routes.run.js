export function RoutesRun($state, $auth, $transitions) {
    'ngInject';

    let requiresAuthCriteria = {
        to: ($state) => $state.data && $state.data.auth
    };

    let redirectToLogin = () => {
        'ngInject';
      
        if (!$auth.isAuthenticated()) {
            return $state.target('app.login', undefined, {location: false});
        }
    };

    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {priority:10});

}
