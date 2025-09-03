async function onRequest(context, request) {
    console.log("Processing request: " + request.url);
    
    var targetPaths = [
        "/api/video/detail",
        "/api/live/room/detail", 
        "/api/video/related",
        "/api/video/report_item",
        "/api/socialposts_info",
        "/api/my/profile"
    ];
    
    var isTarget = false;
    for (var i = 0; i < targetPaths.length; i++) {
        if (request.url.indexOf(targetPaths[i]) !== -1) {
            isTarget = true;
            break;
        }
    }
    
    if (isTarget) {
        request.headers["Authorization"] = "bearer 2d8889cdbf67eda9028325a207dabbc4";
        console.log("✅ Modified Authorization header for: " + request.url);
    }
    
    if (request.url.indexOf("anningsh.com") !== -1) {
        console.log("❌ Blocking report/tracking request: " + request.url);
        return null;
    }
    
    return request;
}

async function onResponse(context, request, response) {
    return response;
}
