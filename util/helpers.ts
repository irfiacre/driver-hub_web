import moment from "moment";

export const emailValidate = (email: string) => {
  if (!email) return "No Email Provided!";
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return email;
  } else {
    return "Invalid Email!";
  }
};

export const formatDate = (date: Date, format?: string): string => {
  const formatToUse = format ? format : "MMM Do YY";
  return moment(date).format(formatToUse);
};

export const formatHtmlEmail = (title: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f6f6f6;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .email-header {
      margin-bottom: 20px;
      text-align: center;
    }
    .email-content {
      text-align: left;
      color: #333333;
      text-align: center;
    }
    .email-footer {
      margin-top: 20px;
      color: #999999;
      font-size: 12px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <img src="https://lh3.googleusercontent.com/a/ACg8ocKeikcteT6clYwQG7hq7OLL7HHmVXslhPHfduX1V1LD9KZZ964=s576-c-no" alt="Logo" width="150" height="150" style="border-radius: 9999px;"/>
    </div>
    <div class="email-content">
      <h2>${title}</h2>
      <div>${message}</div>
    </div>
    <div class="email-footer">
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p>This is an automated message, please do not reply.</p>
    </div>
  </div>
</body>
</html>

`;

export const generateId = (text?: string): string => {
  const baseText = text ? text.split(" ").join("_").toLowerCase() : "";
  return `${baseText}-${new Date().getTime()}`;
};

export const generateFileName = (text?: string): string => {
  const baseText = text ? text.split(" ").join("_").toLowerCase() : "";
  return `${new Date().getTime()}-${baseText}`;
};
