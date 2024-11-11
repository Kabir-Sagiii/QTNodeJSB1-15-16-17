class Notification {
  sendNotification() {
    //write logic to send notification
    console.log("Notification is sent via general way");
  }

  receiveNotification() {
    console.log("Notification Received");
  }
}

class Whatsapp extends Notification {
  sendNotification() {
    //whatsapp logic
  }
  receiveNotification() {
    //whatsapp
  }
}

class Instagram extends Notification {
  sendNotification() {
    //insta logic
  }
  receiveNotification() {
    //insta
    console.log("Insta Notification");
  }
}

class Mobiles {}
