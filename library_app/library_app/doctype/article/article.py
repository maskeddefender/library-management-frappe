# Copyright (c) 2025, Interns of Korecent and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator
import frappe  # Place imports at the top of the file


class Article(WebsiteGenerator):
    pass  # No need to define unnecessary methods if not required


# Utility function to fetch articles
def get_articles():
    # Fetch articles with required fields
    articles = frappe.get_all(
        "Article",
        filters={"is_published": 1},  # Only fetch published articles
        fields=["article_name", "image", "author", "route"]  # Fetch necessary fields
    )
    return articles

@frappe.whitelist()
def render_page():
    articles = get_articles()
    return frappe.render_template("templates/includes/article.row.html", {"articles": articles})

