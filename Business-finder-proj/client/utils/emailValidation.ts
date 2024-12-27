export default function validEmail(email: string) {
  const validateCheck = email.split("@");
  if (validateCheck.length === 2) {
    switch (validateCheck[1]) {
      case "gmail.com":
      case "yahoo.com":
        // enter valid email providers here
        return true;
        break;
    }
  }
  alert("please insert valid email xxx@emailProvider");
  return false;
}
