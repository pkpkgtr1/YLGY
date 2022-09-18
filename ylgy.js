var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data ='84559a02920def9e5a3ddb921617de36'
  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
