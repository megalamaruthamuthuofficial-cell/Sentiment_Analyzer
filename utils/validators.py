from urllib.parse import urlparse


def validate_product_url(url):

    if not url:
        return False, "Product URL is required"

    if not isinstance(url, str):
        return False, "Invalid URL"

    try:

        parsed_url = urlparse(url)

        if parsed_url.scheme not in ["http", "https"]:
            return False, "URL must start with http:// or https://"

        domain = parsed_url.netloc.lower()

        if "amazon." in domain:
            return True, "Amazon"

        if "flipkart.com" in domain:
            return True, "Flipkart"

        return False, "Only Amazon and Flipkart URLs are supported"

    except Exception:

        return False, "Invalid URL"