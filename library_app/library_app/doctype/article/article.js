// Copyright (c) 2025, Interns of Korecent and contributors
// For license information, please see license.txt

frappe.ui.form.on("Article", {
    // Custom Button having Dialog Box
    refresh(frm) {
        frm.add_custom_button(__('Quick Update'), () => {
            console.log("Quick Update button clicked");
            const d = new frappe.ui.Dialog({
                title: __("Quick Update"),
                fields: [
                    {
                        label: __("Status"),
                        fieldname: "status",
                        fieldtype: "Select",
                        options: ["Available", "Issued"]
                    },
                    {
                        label: __("Publisher"),
                        fieldname: "publisher",
                        fieldtype: "Data"
                    }
                ],
                primary_action_label: __("Update"),
                primary_action(values) {
                    frm.set_value("status", values.status);
                    frm.set_value("publisher", values.publisher);
                    d.hide();
                    if(frm.doc.status && frm.doc.publisher){
                        frappe.msgprint(__("Fields have been updated."));
                    }
                    else if(frm.doc.status){
                        frappe.msgprint(__("Status have been updated."));
                    }
                    else if(frm.doc.publisher){
                        frappe.msgprint(__("Publisher have been updated."));
                    }
                }
            });
            d.show();
        });

        frm.set_df_property("article_name", "description", __("Enter the name of the article."));
        frm.set_df_property("author", "description", __("Enter the author's name."));
        frm.set_df_property("isbn", "description", __("Enter a valid 13-digit ISBN."));
        frm.set_df_property("publisher", "description", __("Specify the publisher of the article."));
    },

    publisher(frm) {
        if (frm.doc.publisher) {
            frappe.msgprint({
                title: __("Publisher Updated"),
                message: __("The publisher has been set to " + frm.doc.publisher),
                indicator: "blue"
            });
        }
    },

    

    validate: function (frm) {
        if (frm.doc.isbn && frm.doc.isbn.length !== 13) {
            frappe.throw(__("The ISBN must be exactly 13 characters long."));
        }
    }
});

