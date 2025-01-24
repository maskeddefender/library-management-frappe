frappe.ready(function () {
    // Bind events here
    $('form').on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Construct the dynamic URL
        const dynamicUrl = `${window.location.origin}/apps/library_app/library_app/public/html/afterbookIssue.html`;


        // Redirect to the constructed URL
        window.location.href = dynamicUrl;
    });
});
