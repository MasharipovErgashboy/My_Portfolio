document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("wr5GniXI1QBYyohwq"); // EmailJS’dan olgan PUBLIC KEY’ni shu joyga yozing
  
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Foydalanuvchi kiritgan ma'lumotlarni olish
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      // EmailJS orqali yuborish
      emailjs.send("service_qyzwiyg", "template_mwd69c6", {
        name: name,
        email: email,
        subject: subject,
        message: message
      })
      .then(function(response) {
        alert("✅ Your message has been sent successfully!");
        document.getElementById("contact-form").reset(); // Formani tozalash
      }, function(error) {
        alert("❌ Something went wrong. Please try again.");
      });
    });
  });
  