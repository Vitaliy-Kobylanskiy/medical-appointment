export function Loader(insertionPoint, loaderText) {

    const loadingCreateBanner = document.createElement('p');
    insertionPoint.append(loadingCreateBanner);
    loadingCreateBanner.innerText = `${loaderText}`;
    loadingCreateBanner.classList.add('loading');

    setTimeout(removeLoading, 2000, loadingCreateBanner);

}


function removeLoading(loadingCreateBanner) {

    loadingCreateBanner.remove();

}