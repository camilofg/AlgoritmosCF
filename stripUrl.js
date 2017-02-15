function stripUrlParams(url, paramsToStrip) {
    if (!url) return "";
    var splitObj = url.split('?');
    if (!splitObj[1])
        return url;
    var splitParams = splitObj[1].split('&');
    var dictParams = [];
    for (i = 0; i < splitParams.length; i++) {
        dictParams.push({ key: splitParams[i].split('=')[0], value: splitParams[i].split('=')[1] });
    }

    var filteredParams = []
    filteredParams.push(dictParams[0]);
    for (j = 1; j < dictParams.length; j++) {
        var counter = 0;
        filteredParams.filter(function (m) {
            counter += m.key == dictParams[j].key ? 1 : 0;
        });
        if (counter === 0)
            filteredParams.push(dictParams[j]);
    }

    var strReturn = splitObj[0] + "?";
    for (k = 0; k < filteredParams.length; k++) {
        strReturn += filteredParams[k].key + "=" + filteredParams[k].value + (k === filteredParams.length - 1 ? "" : "&");
    }
    if (arguments.length === 1) return strReturn;

    else {
        strReturn = splitObj[0] + "?";
        for (k = 0; k < filteredParams.length; k++) {
            if (filteredParams[k].key != paramsToStrip[0])
                strReturn += filteredParams[k].key + "=" + filteredParams[k].value + (k === filteredParams.length - 1 ? "" : "&");

            var algo3 = strReturn.charAt(strReturn.length - 1);
            return strReturn.charAt(strReturn.length - 1) === "&" ? strReturn.substring(0, strReturn.length - 1) : strReturn;
        }
    }
}