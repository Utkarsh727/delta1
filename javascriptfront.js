
  const statusCycle = [
     { label: "APPROVED", class: "approved", icon: "✔️" },
      { label: "PUSHBACK", class: "pushback", icon: "⚠️" },
      { label: "PENDING", class: "pending", icon: "⏳" },
     { label: "DENY", class: "deny", icon: "❌" }
   ];


         document.querySelectorAll(".status").forEach(statusSpan => {
          statusSpan.addEventListener("click", e => {
         const card = e.target.closest(".card");
         const currentLabel = statusSpan.textContent;
          const currentIndex = statusCycle.findIndex(s => s.label === currentLabel);
         const nextIndex = (currentIndex + 1) % statusCycle.length;
          const nextStatus = statusCycle[nextIndex];

          statusCycle.forEach(s => card.classList.remove(s.class));
          card.classList.add(nextStatus.class);

   
        statusSpan.textContent = nextStatus.label;
        card.querySelector(".icon").textContent = nextStatus.icon;
     });
  });


       document.querySelectorAll(".toggle-btn").forEach(btn =>
     {
          btn.addEventListener("click", () =>
       {
       const commentsDiv = btn.nextElementSibling;
          const isVisible = commentsDiv.style.display === "block";
    
         commentsDiv.style.display = isVisible ? "none" : "block";
          btn.textContent = isVisible ? "Add Comment" : "Close";
           });
              });



         
        function submitComment(userName, textAreaId) {
       const commentText = document.getElementById(textAreaId).value;
      if (commentText.trim() !== "") {
       alert(`Comment submitted for ${userName}: ${commentText}`);
         document.getElementById(textAreaId).value = "";
        } else {
        alert("Please enter a comment before submitting.");
     }
  }