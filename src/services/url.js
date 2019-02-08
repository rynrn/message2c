export const getNameFormUrl = () => {
    if (typeof(window) !== "undefined" && typeof(URLSearchParams) !== "undefined") {
        const params = new URLSearchParams(window.location.search);	
        return params.get('n');
    }
    return '';
};