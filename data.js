const allSnippets = {
  AddUsertoOrg: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/org/add_user' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/add_user',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/add_user"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/add_user")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/org/add_user");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/org/add_user", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/add_user")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  BlockUser: [
    {
      code: "curl --location --globoff --request POST '{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data ''",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/%7B%7BUSER_ID%7D%7D/disable"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = ""\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  ChangeRole: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/org/change_role' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/change_role',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/change_role"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/change_role")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/org/change_role");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/org/change_role", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/change_role")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  CreateAPIKey: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/end_user_api_keys' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "org_id": "{ORG_ID}",\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "expires_at_seconds": 1630425600,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/end_user_api_keys',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "org_id": "{ORG_ID}",\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "expires_at_seconds": 1630425600,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/end_user_api_keys"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "expires_at_seconds": 1630425600,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "expires_at_seconds": 1630425600,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/end_user_api_keys")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/end_user_api_keys");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "expires_at_seconds": 1630425600,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "expires_at_seconds": 1630425600,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/end_user_api_keys", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/end_user_api_keys")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "expires_at_seconds": 1630425600,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  CreateAccessToken: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/access_token' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "user_id": "{USER_ID}",\n' +
        '    "duration_in_minutes": 1440\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/access_token',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "user_id": "{USER_ID}",\n' +
        '    "duration_in_minutes": 1440\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/access_token"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "duration_in_minutes": 1440\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "duration_in_minutes": 1440\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/access_token")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/access_token");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "duration_in_minutes": 1440\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "duration_in_minutes": 1440\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/access_token", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/access_token")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "duration_in_minutes": 1440\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  CreateMagicLink: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/magic_link' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data-raw '{\n" +
        '    "email": "test@example.com",\n' +
        '    "redirect_to_url": "http://localhost:3000",\n' +
        '    "expires_in_hours": 1,\n' +
        '    "create_new_user_if_one_doesnt_exist": false\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/magic_link',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "email": "test@example.com",\n' +
        '    "redirect_to_url": "http://localhost:3000",\n' +
        '    "expires_in_hours": 1,\n' +
        '    "create_new_user_if_one_doesnt_exist": false\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/magic_link"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "email": "test@example.com",\n' +
        '    "redirect_to_url": "http://localhost:3000",\n' +
        '    "expires_in_hours": 1,\n' +
        '    "create_new_user_if_one_doesnt_exist": false\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "email": "test@example.com",\n' +
        '    "redirect_to_url": "http://localhost:3000",\n' +
        '    "expires_in_hours": 1,\n' +
        '    "create_new_user_if_one_doesnt_exist": false\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/magic_link")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/magic_link");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "email": "test@example.com",\n' +
        '    "redirect_to_url": "http://localhost:3000",\n' +
        '    "expires_in_hours": 1,\n' +
        '    "create_new_user_if_one_doesnt_exist": false\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "email": "test@example.com",\n' +
        '    "redirect_to_url": "http://localhost:3000",\n' +
        '    "expires_in_hours": 1,\n' +
        '    "create_new_user_if_one_doesnt_exist": false\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/magic_link", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/magic_link")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "email": "test@example.com",\n' +
        '    "redirect_to_url": "http://localhost:3000",\n' +
        '    "expires_in_hours": 1,\n' +
        '    "create_new_user_if_one_doesnt_exist": false\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  CreateOrg: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/org/' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}",\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "max_users": 100\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}",\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "max_users": 100\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}",\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "max_users": 100\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}",\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "max_users": 100\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/org/");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}",\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "max_users": 100\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}",\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "max_users": 100\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/org/", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}",\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "max_users": 100\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  CreateSAMLConnectionLink: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/org/{ORG_ID}/create_saml_connection_link' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "expires_in_seconds": 86400\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/{ORG_ID}/create_saml_connection_link',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "expires_in_seconds": 86400\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/%7B%7BORG_ID%7D%7D/create_saml_connection_link"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "expires_in_seconds": 86400\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "expires_in_seconds": 86400\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/{ORG_ID}/create_saml_connection_link")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/org/{ORG_ID}/create_saml_connection_link");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "expires_in_seconds": 86400\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "expires_in_seconds": 86400\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/org/{ORG_ID}/create_saml_connection_link", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/{ORG_ID}/create_saml_connection_link")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "expires_in_seconds": 86400\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  CreateUser: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/user/' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data-raw '{\n" +
        '    "email": "test@propelauth.com",\n' +
        '    "email_confirmed": false,\n' +
        '    "send_email_to_confirm_email_address": false,\n' +
        '    "password": "hxjV6A0zcp",\n' +
        '    "ask_user_to_update_password_on_login": true,\n' +
        '    "username": "ant",\n' +
        '    "first_name": "Anthony",\n' +
        '    "last_name": "Edwards",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "email": "test@propelauth.com",\n' +
        '    "email_confirmed": false,\n' +
        '    "send_email_to_confirm_email_address": false,\n' +
        '    "password": "hxjV6A0zcp",\n' +
        '    "ask_user_to_update_password_on_login": true,\n' +
        '    "username": "ant",\n' +
        '    "first_name": "Anthony",\n' +
        '    "last_name": "Edwards",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "email": "test@propelauth.com",\n' +
        '    "email_confirmed": false,\n' +
        '    "send_email_to_confirm_email_address": false,\n' +
        '    "password": "hxjV6A0zcp",\n' +
        '    "ask_user_to_update_password_on_login": true,\n' +
        '    "username": "ant",\n' +
        '    "first_name": "Anthony",\n' +
        '    "last_name": "Edwards",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "email": "test@propelauth.com",\n' +
        '    "email_confirmed": false,\n' +
        '    "send_email_to_confirm_email_address": false,\n' +
        '    "password": "hxjV6A0zcp",\n' +
        '    "ask_user_to_update_password_on_login": true,\n' +
        '    "username": "ant",\n' +
        '    "first_name": "Anthony",\n' +
        '    "last_name": "Edwards",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/user/");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "email": "test@propelauth.com",\n' +
        '    "email_confirmed": false,\n' +
        '    "send_email_to_confirm_email_address": false,\n' +
        '    "password": "hxjV6A0zcp",\n' +
        '    "ask_user_to_update_password_on_login": true,\n' +
        '    "username": "ant",\n' +
        '    "first_name": "Anthony",\n' +
        '    "last_name": "Edwards",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "email": "test@propelauth.com",\n' +
        '    "email_confirmed": false,\n' +
        '    "send_email_to_confirm_email_address": false,\n' +
        '    "password": "hxjV6A0zcp",\n' +
        '    "ask_user_to_update_password_on_login": true,\n' +
        '    "username": "ant",\n' +
        '    "first_name": "Anthony",\n' +
        '    "last_name": "Edwards",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/user/", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "email": "test@propelauth.com",\n' +
        '    "email_confirmed": false,\n' +
        '    "send_email_to_confirm_email_address": false,\n' +
        '    "password": "hxjV6A0zcp",\n' +
        '    "ask_user_to_update_password_on_login": true,\n' +
        '    "username": "ant",\n' +
        '    "first_name": "Anthony",\n' +
        '    "last_name": "Edwards",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  DeleteAPIKey: [
    {
      code: "curl --location --globoff --request DELETE '{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'DELETE',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/end_user_api_keys/%7B%7BEND_USER_API_KEY_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"DELETE"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}")\n' +
        '  .method("DELETE", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Delete, "{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("DELETE", url = "{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Delete.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  DeleteOrg: [
    {
      code: "curl --location --globoff --request DELETE '{AUTH_URL}/api/backend/v1/org/{ORG_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/{ORG_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'DELETE',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/%7B%7BORG_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"DELETE"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/{ORG_ID}")\n' +
        '  .method("DELETE", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Delete, "{AUTH_URL}/api/backend/v1/org/{ORG_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("DELETE", url = "{AUTH_URL}/api/backend/v1/org/{ORG_ID}", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/{ORG_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Delete.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  DeleteSAMLConnection: [
    {
      code: "curl --location --globoff --request DELETE '{AUTH_URL}/api/backend/v1/saml_idp_metadata/{ORG_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "idp_entity_id": "",\n' +
        '    "idp_sso_url": "",\n' +
        '    "idp_certificate": "",\n' +
        '    "provider": "",\n' +
        '    "org_id": {{org_id}}\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/saml_idp_metadata/{ORG_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'DELETE',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "idp_entity_id": "",\n' +
        '    "idp_sso_url": "",\n' +
        '    "idp_certificate": "",\n' +
        '    "provider": "",\n' +
        '    "org_id": {{org_id}}\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/saml_idp_metadata/%7B%7BORG_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "idp_entity_id": "",\n' +
        '    "idp_sso_url": "",\n' +
        '    "idp_certificate": "",\n' +
        '    "provider": "",\n' +
        '    "org_id": {{org_id}}\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"DELETE"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "idp_entity_id": "",\n' +
        '    "idp_sso_url": "",\n' +
        '    "idp_certificate": "",\n' +
        '    "provider": "",\n' +
        '    "org_id": {{org_id}}\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/saml_idp_metadata/{ORG_ID}")\n' +
        '  .method("DELETE", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Delete, "{AUTH_URL}/api/backend/v1/saml_idp_metadata/{ORG_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "idp_entity_id": "",\n' +
        '    "idp_sso_url": "",\n' +
        '    "idp_certificate": "",\n' +
        '    "provider": "",\n' +
        '    "org_id": {{org_id}}\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "idp_entity_id": "",\n' +
        '    "idp_sso_url": "",\n' +
        '    "idp_certificate": "",\n' +
        '    "provider": "",\n' +
        '    "org_id": {{org_id}}\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("DELETE", url = "{AUTH_URL}/api/backend/v1/saml_idp_metadata/{ORG_ID}", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/saml_idp_metadata/{ORG_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Delete.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "idp_entity_id": "",\n' +
        '    "idp_sso_url": "",\n' +
        '    "idp_certificate": "",\n' +
        '    "provider": "",\n' +
        '    "org_id": {{org_id}}\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  DeleteUser: [
    {
      code: "curl --location --globoff --request DELETE '{AUTH_URL}/api/backend/v1/user/{USER_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/{USER_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'DELETE',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/%7B%7BUSER_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"DELETE"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/{USER_ID}")\n' +
        '  .method("DELETE", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Delete, "{AUTH_URL}/api/backend/v1/user/{USER_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("DELETE", url = "{AUTH_URL}/api/backend/v1/user/{USER_ID}", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/{USER_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Delete.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  DisableSAMLforOrg: [
    {
      code: "curl --location --globoff --request POST '{AUTH_URL}/api/backend/v1/org/{ORG_ID}/disallow_saml' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/{ORG_ID}/disallow_saml',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/%7B%7BORG_ID%7D%7D/disallow_saml"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/{ORG_ID}/disallow_saml")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/org/{ORG_ID}/disallow_saml");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/org/{ORG_ID}/disallow_saml", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/{ORG_ID}/disallow_saml")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  DisableUser2FA: [
    {
      code: "curl --location --globoff --request POST '{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable_2fa' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data ''",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable_2fa',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/%7B%7BUSER_ID%7D%7D/disable_2fa"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable_2fa")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable_2fa");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = ""\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable_2fa", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/{USER_ID}/disable_2fa")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  EnableSAMLConnection: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/saml_idp_metadata/go_live/{ORG_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/saml_idp_metadata/go_live/{ORG_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/saml_idp_metadata/go_live/%7B%7BORG_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/saml_idp_metadata/go_live/{ORG_ID}")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/saml_idp_metadata/go_live/{ORG_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/saml_idp_metadata/go_live/{ORG_ID}", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/saml_idp_metadata/go_live/{ORG_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  EnableSAMLforOrg: [
    {
      code: "curl --location --globoff --request POST '{AUTH_URL}/api/backend/v1/org/{ORG_ID}/allow_saml' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/{ORG_ID}/allow_saml',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/%7B%7BORG_ID%7D%7D/allow_saml"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/{ORG_ID}/allow_saml")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/org/{ORG_ID}/allow_saml");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/org/{ORG_ID}/allow_saml", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/{ORG_ID}/allow_saml")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchAPIKey: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/end_user_api_keys/%7B%7BEND_USER_API_KEY_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchActiveAPIKeys: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/end_user_api_keys' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/end_user_api_keys',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/end_user_api_keys"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/end_user_api_keys")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/end_user_api_keys");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/end_user_api_keys", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/end_user_api_keys")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchExpiredAPIKeys: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/end_user_api_keys/archived' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/end_user_api_keys/archived',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/end_user_api_keys/archived"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'MediaType JSON = MediaType.parse("application/json; charset=utf-8");\n' +
        'RequestBody body = RequestBody.create(JSON, "{}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/end_user_api_keys/archived")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/end_user_api_keys/archived");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        `res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/end_user_api_keys/archived", add_headers(headers), encode = 'multipart')\n` +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/end_user_api_keys/archived")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'form_data = []\n' +
        "request.set_form form_data, 'multipart/form-data'\n" +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchOrg: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/org/{ORG_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/{ORG_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/%7B%7BORG_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/{ORG_ID}")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/org/{ORG_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/org/{ORG_ID}", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/{ORG_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchOrgSAMLMetadata: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/saml_sp_metadata/{ORG_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/saml_sp_metadata/{ORG_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/saml_sp_metadata/%7B%7BORG_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/saml_sp_metadata/{ORG_ID}")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/saml_sp_metadata/{ORG_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/saml_sp_metadata/{ORG_ID}", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/saml_sp_metadata/{ORG_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchOrgs: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/org/query' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/query',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/query"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/query")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/org/query");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/org/query", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/query")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchRoleConfigurations: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/custom_role_mappings' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/custom_role_mappings',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/custom_role_mappings"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/custom_role_mappings")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/custom_role_mappings");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/custom_role_mappings", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/custom_role_mappings")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchUserByEmailAddress: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/user/email?email=test%40propelauth.com&include_orgs=true' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/email?email=test%40propelauth.com&include_orgs=true',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/email?email=test@propelauth.com&include_orgs=true"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/email?email=test@propelauth.com&include_orgs=true")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/user/email?email=test@propelauth.com&include_orgs=true");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/user/email?email=test@propelauth.com&include_orgs=true", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/email?email=test@propelauth.com&include_orgs=true")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchUserByUserID: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/user/{USER_ID}?include_orgs=true' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/{USER_ID}?include_orgs=true',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/%7B%7BUSER_ID%7D%7D?include_orgs=true"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/{USER_ID}?include_orgs=true")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/user/{USER_ID}?include_orgs=true");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/user/{USER_ID}?include_orgs=true", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/{USER_ID}?include_orgs=true")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchUserByUsername: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/user/username?username=ant&include_orgs=true' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/username?username=ant&include_orgs=true',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/username?username=ant&include_orgs=true"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/username?username=ant&include_orgs=true")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/user/username?username=ant&include_orgs=true");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/user/username?username=ant&include_orgs=true", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/username?username=ant&include_orgs=true")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchUserOAuthTokens: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/user/{USER_ID}/oauth_token' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/{USER_ID}/oauth_token',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/%7B%7BUSER_ID%7D%7D/oauth_token"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/{USER_ID}/oauth_token")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/user/{USER_ID}/oauth_token");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/user/{USER_ID}/oauth_token", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/{USER_ID}/oauth_token")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  FetchUsersinOrg: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/user/org/{ORG_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/org/{ORG_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/org/%7B%7BORG_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/org/{ORG_ID}")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/user/org/{ORG_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/user/org/{ORG_ID}", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/org/{ORG_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  ForceLogoutAllUserSessions: [
    {
      code: "curl --location --globoff --request POST '{AUTH_URL}/api/backend/v1/user/{USER_ID}/logout_all_sessions' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/{USER_ID}/logout_all_sessions',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/%7B%7BUSER_ID%7D%7D/logout_all_sessions"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/{USER_ID}/logout_all_sessions")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/user/{USER_ID}/logout_all_sessions");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/user/{USER_ID}/logout_all_sessions", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/{USER_ID}/logout_all_sessions")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  GetPendingOrgInvites: [
    {
      code: "curl --location '' \\\n--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@""]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  InviteUsertoOrg: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/invite_user' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data-raw '{\n" +
        '    "email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/invite_user',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/invite_user"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/invite_user")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/invite_user");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/invite_user", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/invite_user")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}",\n' +
        '    "role": "Member"\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  MigrateuserFromExternalSource: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/migrate_user/' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data-raw '{\n" +
        '    "email": "test@example.com",\n' +
        '    "email_confirmed": true,\n' +
        '    "existing_user_id": "1234",\n' +
        '    "existing_password_hash": "bcrypt_hash",\n' +
        '    "existing_mfa_base32_encoded_secret": "base32_encoded_secret",\n' +
        '    "update_password_required": false,\n' +
        '    "enabled": true,\n' +
        '    "username": "airbud3",\n' +
        '    "first_name": "Buddy",\n' +
        '    "last_name": "Framm",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/migrate_user/',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "email": "test@example.com",\n' +
        '    "email_confirmed": true,\n' +
        '    "existing_user_id": "1234",\n' +
        '    "existing_password_hash": "bcrypt_hash",\n' +
        '    "existing_mfa_base32_encoded_secret": "base32_encoded_secret",\n' +
        '    "update_password_required": false,\n' +
        '    "enabled": true,\n' +
        '    "username": "airbud3",\n' +
        '    "first_name": "Buddy",\n' +
        '    "last_name": "Framm",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/migrate_user/"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "email": "test@example.com",\n' +
        '    "email_confirmed": true,\n' +
        '    "existing_user_id": "1234",\n' +
        '    "existing_password_hash": "bcrypt_hash",\n' +
        '    "existing_mfa_base32_encoded_secret": "base32_encoded_secret",\n' +
        '    "update_password_required": false,\n' +
        '    "enabled": true,\n' +
        '    "username": "airbud3",\n' +
        '    "first_name": "Buddy",\n' +
        '    "last_name": "Framm",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "email": "test@example.com",\n' +
        '    "email_confirmed": true,\n' +
        '    "existing_user_id": "1234",\n' +
        '    "existing_password_hash": "bcrypt_hash",\n' +
        '    "existing_mfa_base32_encoded_secret": "base32_encoded_secret",\n' +
        '    "update_password_required": false,\n' +
        '    "enabled": true,\n' +
        '    "username": "airbud3",\n' +
        '    "first_name": "Buddy",\n' +
        '    "last_name": "Framm",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/migrate_user/")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/migrate_user/");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "email": "test@example.com",\n' +
        '    "email_confirmed": true,\n' +
        '    "existing_user_id": "1234",\n' +
        '    "existing_password_hash": "bcrypt_hash",\n' +
        '    "existing_mfa_base32_encoded_secret": "base32_encoded_secret",\n' +
        '    "update_password_required": false,\n' +
        '    "enabled": true,\n' +
        '    "username": "airbud3",\n' +
        '    "first_name": "Buddy",\n' +
        '    "last_name": "Framm",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "email": "test@example.com",\n' +
        '    "email_confirmed": true,\n' +
        '    "existing_user_id": "1234",\n' +
        '    "existing_password_hash": "bcrypt_hash",\n' +
        '    "existing_mfa_base32_encoded_secret": "base32_encoded_secret",\n' +
        '    "update_password_required": false,\n' +
        '    "enabled": true,\n' +
        '    "username": "airbud3",\n' +
        '    "first_name": "Buddy",\n' +
        '    "last_name": "Framm",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/migrate_user/", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/migrate_user/")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "email": "test@example.com",\n' +
        '    "email_confirmed": true,\n' +
        '    "existing_user_id": "1234",\n' +
        '    "existing_password_hash": "bcrypt_hash",\n' +
        '    "existing_mfa_base32_encoded_secret": "base32_encoded_secret",\n' +
        '    "update_password_required": false,\n' +
        '    "enabled": true,\n' +
        '    "username": "airbud3",\n' +
        '    "first_name": "Buddy",\n' +
        '    "last_name": "Framm",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "basketball"\n' +
        '    }\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  QueryForUsers: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/user/query' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/query',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'GET',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/query"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        '\n' +
        '[request setHTTPMethod:@"GET"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/query")\n' +
        '  .method("GET", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Get, "{AUTH_URL}/api/backend/v1/user/query");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'res <- VERB("GET", url = "{AUTH_URL}/api/backend/v1/user/query", add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/query")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Get.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  RemoveUserFromOrg: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/org/remove_user' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/remove_user',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/remove_user"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/remove_user")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/org/remove_user");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/org/remove_user", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/remove_user")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "user_id": "{USER_ID}",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  ResendEmailConfirmation: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/resend_email_confirmation' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "user_id": "{USER_ID}"\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/resend_email_confirmation',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "user_id": "{USER_ID}"\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/resend_email_confirmation"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "user_id": "{USER_ID}"\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "user_id": "{USER_ID}"\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/resend_email_confirmation")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/resend_email_confirmation");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "user_id": "{USER_ID}"\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "user_id": "{USER_ID}"\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/resend_email_confirmation", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/resend_email_confirmation")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "user_id": "{USER_ID}"\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  RevokePendingOrgInvite: [
    {
      code: "curl --location --globoff --request DELETE '{AUTH_URL}/api/backend/v1/pending_org_invites' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data-raw '{\n" +
        '    "invitee_email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/pending_org_invites',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'DELETE',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "invitee_email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/pending_org_invites"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "invitee_email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"DELETE"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "invitee_email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/pending_org_invites")\n' +
        '  .method("DELETE", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Delete, "{AUTH_URL}/api/backend/v1/pending_org_invites");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "invitee_email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "invitee_email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("DELETE", url = "{AUTH_URL}/api/backend/v1/pending_org_invites", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/pending_org_invites")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Delete.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "invitee_email": "test@propelauth.com",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  SetSAMLIdPMetadata: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/saml_idp_metadata' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "idp_entity_id": "http://www.okta.com/example",\n' +
        '    "idp_sso_url": "https://dev.okta.com/app/example/example/sso/saml",\n' +
        '    "idp_certificate": "-----BEGIN CERTIFICATE-----MIIDqDCCApCgAw-----END CERTIFICATE-----",\n' +
        '    "provider": "Okta",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/saml_idp_metadata',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "idp_entity_id": "http://www.okta.com/example",\n' +
        '    "idp_sso_url": "https://dev.okta.com/app/example/example/sso/saml",\n' +
        '    "idp_certificate": "-----BEGIN CERTIFICATE-----MIIDqDCCApCgAw-----END CERTIFICATE-----",\n' +
        '    "provider": "Okta",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/saml_idp_metadata"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "idp_entity_id": "http://www.okta.com/example",\n' +
        '    "idp_sso_url": "https://dev.okta.com/app/example/example/sso/saml",\n' +
        '    "idp_certificate": "-----BEGIN CERTIFICATE-----MIIDqDCCApCgAw-----END CERTIFICATE-----",\n' +
        '    "provider": "Okta",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "idp_entity_id": "http://www.okta.com/example",\n' +
        '    "idp_sso_url": "https://dev.okta.com/app/example/example/sso/saml",\n' +
        '    "idp_certificate": "-----BEGIN CERTIFICATE-----MIIDqDCCApCgAw-----END CERTIFICATE-----",\n' +
        '    "provider": "Okta",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/saml_idp_metadata")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/saml_idp_metadata");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "idp_entity_id": "http://www.okta.com/example",\n' +
        '    "idp_sso_url": "https://dev.okta.com/app/example/example/sso/saml",\n' +
        '    "idp_certificate": "-----BEGIN CERTIFICATE-----MIIDqDCCApCgAw-----END CERTIFICATE-----",\n' +
        '    "provider": "Okta",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "idp_entity_id": "http://www.okta.com/example",\n' +
        '    "idp_sso_url": "https://dev.okta.com/app/example/example/sso/saml",\n' +
        '    "idp_certificate": "-----BEGIN CERTIFICATE-----MIIDqDCCApCgAw-----END CERTIFICATE-----",\n' +
        '    "provider": "Okta",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/saml_idp_metadata", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/saml_idp_metadata")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "idp_entity_id": "http://www.okta.com/example",\n' +
        '    "idp_sso_url": "https://dev.okta.com/app/example/example/sso/saml",\n' +
        '    "idp_certificate": "-----BEGIN CERTIFICATE-----MIIDqDCCApCgAw-----END CERTIFICATE-----",\n' +
        '    "provider": "Okta",\n' +
        '    "org_id": "{ORG_ID}"\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  SubscribeOrgToRoleConfiguration: [
    {
      code: "curl --location --globoff --request PUT '{AUTH_URL}/api/backend/v1/org/{ORG_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}"\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/{ORG_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'PUT',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}"\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/%7B%7BORG_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}"\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"PUT"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}"\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/{ORG_ID}")\n' +
        '  .method("PUT", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Put, "{AUTH_URL}/api/backend/v1/org/{ORG_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}"\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}"\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("PUT", url = "{AUTH_URL}/api/backend/v1/org/{ORG_ID}", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/{ORG_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Put.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "custom_role_mapping_name": "{ROLE_CONFIGURATION_NAME}"\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  UnblockUser: [
    {
      code: "curl --location --globoff --request POST '{AUTH_URL}/api/backend/v1/user/{USER_ID}/enable' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data ''",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/{USER_ID}/enable',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/%7B%7BUSER_ID%7D%7D/enable"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/{USER_ID}/enable")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/user/{USER_ID}/enable");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = ""\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/user/{USER_ID}/enable", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/{USER_ID}/enable")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  UpdateAPIKey: [
    {
      code: "curl --location --globoff --request PATCH '{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "expires_at_seconds": 1712848015,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'PATCH',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "expires_at_seconds": 1712848015,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/end_user_api_keys/%7B%7BEND_USER_API_KEY_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "expires_at_seconds": 1712848015,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"PATCH"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "expires_at_seconds": 1712848015,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}")\n' +
        '  .method("PATCH", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Patch, "{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "expires_at_seconds": 1712848015,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "expires_at_seconds": 1712848015,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("PATCH", url = "{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/end_user_api_keys/{END_USER_API_KEY_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Patch.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "expires_at_seconds": 1712848015,\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  UpdateOrg: [
    {
      code: "curl --location --globoff --request PUT '{AUTH_URL}/api/backend/v1/org/{ORG_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "max_users": 100,\n' +
        '    "can_setup_saml": true,\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/org/{ORG_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'PUT',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "max_users": 100,\n' +
        '    "can_setup_saml": true,\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/org/%7B%7BORG_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "max_users": 100,\n' +
        '    "can_setup_saml": true,\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"PUT"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "max_users": 100,\n' +
        '    "can_setup_saml": true,\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/org/{ORG_ID}")\n' +
        '  .method("PUT", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Put, "{AUTH_URL}/api/backend/v1/org/{ORG_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "max_users": 100,\n' +
        '    "can_setup_saml": true,\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "max_users": 100,\n' +
        '    "can_setup_saml": true,\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("PUT", url = "{AUTH_URL}/api/backend/v1/org/{ORG_ID}", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/org/{ORG_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Put.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "name": "Acme Inc",\n' +
        '    "domain": "acme.com",\n' +
        '    "enable_auto_joining_by_domain": true,\n' +
        '    "members_must_have_matching_domain": true,\n' +
        '    "max_users": 100,\n' +
        '    "can_setup_saml": true,\n' +
        '    "legacy_org_id": "1234",\n' +
        '    "metadata": {\n' +
        '        "customKey": "customValue"\n' +
        '    }\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  UpdateUser: [
    {
      code: "curl --location --globoff --request PUT '{AUTH_URL}/api/backend/v1/user/{USER_ID}' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "username": "username",\n' +
        '    "first_name": "firstName",\n' +
        '    "last_name": "lastName",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "value"\n' +
        '    },\n' +
        '    "update_password_required": false\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/{USER_ID}',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'PUT',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "username": "username",\n' +
        '    "first_name": "firstName",\n' +
        '    "last_name": "lastName",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "value"\n' +
        '    },\n' +
        '    "update_password_required": false\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/%7B%7BUSER_ID%7D%7D"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "username": "username",\n' +
        '    "first_name": "firstName",\n' +
        '    "last_name": "lastName",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "value"\n' +
        '    },\n' +
        '    "update_password_required": false\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"PUT"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "username": "username",\n' +
        '    "first_name": "firstName",\n' +
        '    "last_name": "lastName",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "value"\n' +
        '    },\n' +
        '    "update_password_required": false\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/{USER_ID}")\n' +
        '  .method("PUT", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Put, "{AUTH_URL}/api/backend/v1/user/{USER_ID}");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "username": "username",\n' +
        '    "first_name": "firstName",\n' +
        '    "last_name": "lastName",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "value"\n' +
        '    },\n' +
        '    "update_password_required": false\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "username": "username",\n' +
        '    "first_name": "firstName",\n' +
        '    "last_name": "lastName",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "value"\n' +
        '    },\n' +
        '    "update_password_required": false\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("PUT", url = "{AUTH_URL}/api/backend/v1/user/{USER_ID}", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/{USER_ID}")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Put.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "username": "username",\n' +
        '    "first_name": "firstName",\n' +
        '    "last_name": "lastName",\n' +
        '    "picture_url": "https://example.com/img.png",\n' +
        '    "properties": {\n' +
        '        "favoriteSport": "value"\n' +
        '    },\n' +
        '    "update_password_required": false\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  UpdateUserEmail: [
    {
      code: "curl --location --globoff --request PUT '{AUTH_URL}/api/backend/v1/user/{USER_ID}/email' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data-raw '{\n" +
        '    "new_email": "test@example.com",\n' +
        '    "require_email_confirmation": false\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/{USER_ID}/email',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'PUT',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "new_email": "test@example.com",\n' +
        '    "require_email_confirmation": false\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/%7B%7BUSER_ID%7D%7D/email"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "new_email": "test@example.com",\n' +
        '    "require_email_confirmation": false\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"PUT"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "new_email": "test@example.com",\n' +
        '    "require_email_confirmation": false\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/{USER_ID}/email")\n' +
        '  .method("PUT", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Put, "{AUTH_URL}/api/backend/v1/user/{USER_ID}/email");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "new_email": "test@example.com",\n' +
        '    "require_email_confirmation": false\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "new_email": "test@example.com",\n' +
        '    "require_email_confirmation": false\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("PUT", url = "{AUTH_URL}/api/backend/v1/user/{USER_ID}/email", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/{USER_ID}/email")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Put.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "new_email": "test@example.com",\n' +
        '    "require_email_confirmation": false\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  UpdateUserPassword: [
    {
      code: "curl --location --globoff --request PUT '{AUTH_URL}/api/backend/v1/user/{USER_ID}/password' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "password": "moresecurethanthis",\n' +
        '    "ask_user_to_update_password_on_login": false\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/user/{USER_ID}/password',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'PUT',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "password": "moresecurethanthis",\n' +
        '    "ask_user_to_update_password_on_login": false\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/user/%7B%7BUSER_ID%7D%7D/password"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "password": "moresecurethanthis",\n' +
        '    "ask_user_to_update_password_on_login": false\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"PUT"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "password": "moresecurethanthis",\n' +
        '    "ask_user_to_update_password_on_login": false\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/user/{USER_ID}/password")\n' +
        '  .method("PUT", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Put, "{AUTH_URL}/api/backend/v1/user/{USER_ID}/password");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "password": "moresecurethanthis",\n' +
        '    "ask_user_to_update_password_on_login": false\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "password": "moresecurethanthis",\n' +
        '    "ask_user_to_update_password_on_login": false\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("PUT", url = "{AUTH_URL}/api/backend/v1/user/{USER_ID}/password", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/user/{USER_ID}/password")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Put.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "password": "moresecurethanthis",\n' +
        '    "ask_user_to_update_password_on_login": false\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ],
  ValidateAPIKey: [
    {
      code: "curl --location --globoff '{AUTH_URL}/api/backend/v1/end_user_api_keys/validate' \\\n" +
        "--header 'Authorization: Bearer {API_KEY}' \\\n" +
        "--data '{\n" +
        '    "api_key_token": "{END_USER_API_KEY}"\n' +
        "}'",
      lang: 'curl',
      title: 'cURL'
    },
    {
      code: '<?php\n' +
        '\n' +
        '$curl = curl_init();\n' +
        '\n' +
        'curl_setopt_array($curl, array(\n' +
        "  CURLOPT_URL => '{AUTH_URL}/api/backend/v1/end_user_api_keys/validate',\n" +
        '  CURLOPT_RETURNTRANSFER => true,\n' +
        "  CURLOPT_ENCODING => '',\n" +
        '  CURLOPT_MAXREDIRS => 10,\n' +
        '  CURLOPT_TIMEOUT => 0,\n' +
        '  CURLOPT_FOLLOWLOCATION => true,\n' +
        '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
        "  CURLOPT_CUSTOMREQUEST => 'POST',\n" +
        "  CURLOPT_POSTFIELDS =>'{\n" +
        '    "api_key_token": "{END_USER_API_KEY}"\n' +
        "}',\n" +
        '  CURLOPT_HTTPHEADER => array(\n' +
        "    'Authorization: Bearer {API_KEY}'\n" +
        '  ),\n' +
        '));\n' +
        '\n' +
        '$response = curl_exec($curl);\n' +
        '\n' +
        'curl_close($curl);\n' +
        'echo $response;\n',
      lang: 'php',
      title: 'PHP'
    },
    {
      code: '#import <Foundation/Foundation.h>\n' +
        '\n' +
        'dispatch_semaphore_t sema = dispatch_semaphore_create(0);\n' +
        '\n' +
        'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"%7B%7BAUTH_URL%7D%7D/api/backend/v1/end_user_api_keys/validate"]\n' +
        '  cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
        '  timeoutInterval:10.0];\n' +
        'NSDictionary *headers = @{\n' +
        '  @"Authorization": @"Bearer {API_KEY}"\n' +
        '};\n' +
        '\n' +
        '[request setAllHTTPHeaderFields:headers];\n' +
        'NSData *postData = [[NSData alloc] initWithData:[@"{\n' +
        '    "api_key_token": "{END_USER_API_KEY}"\n' +
        '}" dataUsingEncoding:NSUTF8StringEncoding]];\n' +
        '[request setHTTPBody:postData];\n' +
        '\n' +
        '[request setHTTPMethod:@"POST"];\n' +
        '\n' +
        'NSURLSession *session = [NSURLSession sharedSession];\n' +
        'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
        'completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
        '  if (error) {\n' +
        '    NSLog(@"%@", error);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  } else {\n' +
        '    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
        '    NSError *parseError = nil;\n' +
        '    NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];\n' +
        '    NSLog(@"%@",responseDictionary);\n' +
        '    dispatch_semaphore_signal(sema);\n' +
        '  }\n' +
        '}];\n' +
        '[dataTask resume];\n' +
        'dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);',
      lang: 'objective-c',
      title: 'Object-C'
    },
    {
      code: 'OkHttpClient client = new OkHttpClient().newBuilder()\n' +
        '  .build();\n' +
        'MediaType mediaType = MediaType.parse("text/plain");\n' +
        'RequestBody body = RequestBody.create(mediaType, "{\n' +
        '    "api_key_token": "{END_USER_API_KEY}"\n' +
        '}");\n' +
        'Request request = new Request.Builder()\n' +
        '  .url("{AUTH_URL}/api/backend/v1/end_user_api_keys/validate")\n' +
        '  .method("POST", body)\n' +
        '  .addHeader("Authorization", "Bearer {API_KEY}")\n' +
        '  .build();\n' +
        'Response response = client.newCall(request).execute();',
      lang: 'java',
      title: 'Java'
    },
    {
      code: 'var client = new HttpClient();\n' +
        'var request = new HttpRequestMessage(HttpMethod.Post, "{AUTH_URL}/api/backend/v1/end_user_api_keys/validate");\n' +
        'request.Headers.Add("Authorization", "Bearer {API_KEY}");\n' +
        'var content = new StringContent("{\n' +
        '    "api_key_token": "{END_USER_API_KEY}"\n' +
        '}", null, "text/plain");\n' +
        'request.Content = content;\n' +
        'var response = await client.SendAsync(request);\n' +
        'response.EnsureSuccessStatusCode();\n' +
        'Console.WriteLine(await response.Content.ReadAsStringAsync());\n',
      lang: 'csharp',
      title: 'C#'
    },
    {
      code: 'library(httr)\n' +
        '\n' +
        'headers = c(\n' +
        "  'Authorization' = 'Bearer {API_KEY}'\n" +
        ')\n' +
        '\n' +
        'body = "{\n' +
        '    "api_key_token": "{END_USER_API_KEY}"\n' +
        '}"\n' +
        '\n' +
        'res <- VERB("POST", url = "{AUTH_URL}/api/backend/v1/end_user_api_keys/validate", body = body, add_headers(headers))\n' +
        '\n' +
        "cat(content(res, 'text'))",
      lang: 'r',
      title: 'R'
    },
    {
      code: 'require "uri"\n' +
        'require "net/http"\n' +
        '\n' +
        'url = URI("{AUTH_URL}/api/backend/v1/end_user_api_keys/validate")\n' +
        '\n' +
        'http = Net::HTTP.new(url.host, url.port);\n' +
        'request = Net::HTTP::Post.new(url)\n' +
        'request["Authorization"] = "Bearer {API_KEY}"\n' +
        'request.body = "{\n' +
        '    "api_key_token": "{END_USER_API_KEY}"\n' +
        '}"\n' +
        '\n' +
        'response = http.request(request)\n' +
        'puts response.read_body\n',
      lang: 'ruby',
      title: 'Ruby'
    }
  ]
};

export default allSnippets;