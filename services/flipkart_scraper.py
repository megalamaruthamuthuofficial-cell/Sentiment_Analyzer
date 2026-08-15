from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from webdriver_manager.chrome import ChromeDriverManager

import time


def scrape_flipkart(url):

    options = webdriver.ChromeOptions()

    options.add_argument("--start-maximized")
    options.add_argument("--disable-blink-features=AutomationControlled")

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options
    )

    reviews = []

    try:

        print("Opening Flipkart...")

        driver.get(url)

        time.sleep(5)

        print("CURRENT URL:", driver.current_url)
        print("PAGE TITLE:", driver.title)

        # Find "Show all reviews"
        print("Searching for Show all reviews...")

        show_reviews = driver.find_elements(
            By.XPATH,
            "//*[contains(text(),'Show all reviews')]"
        )

        print(
            "Show all reviews elements:",
            len(show_reviews)
        )

        if show_reviews:

            try:

                driver.execute_script(
                    "arguments[0].scrollIntoView({block:'center'});",
                    show_reviews[0]
                )

                time.sleep(2)

                driver.execute_script(
                    "arguments[0].click();",
                    show_reviews[0]
                )

                print("Clicked Show all reviews")

                time.sleep(5)

            except Exception as error:

                print(
                    "Show all reviews click error:",
                    error
                )

        print("Searching for review content...")

        # Get all visible text elements
        elements = driver.find_elements(
            By.XPATH,
            "//*[normalize-space(text())]"
        )

        print(
            "Total text elements:",
            len(elements)
        )

        # Keywords which identify review area
        review_keywords = [
            "Wonderful",
            "Amazing",
            "Mind-blowing",
            "Excellent",
            "Good",
            "Bad",
            "Awesome",
            "Great",
            "Nice",
            "Worst",
            "Superb",
            "Value for money",
            "Just wow"
        ]

        found_texts = []

        for element in elements:

            try:

                text = element.text.strip()

                if not text:
                    continue

                # Avoid very large parent elements
                if len(text) > 500:
                    continue

                for keyword in review_keywords:

                    if keyword.lower() in text.lower():

                        if text not in found_texts:

                            found_texts.append(text)

                        break

            except Exception:

                continue

        print(
            "Possible review texts found:",
            len(found_texts)
        )

        for text in found_texts[:50]:

            print("REVIEW:", text)

            reviews.append(text)

        print(
            "Total reviews found:",
            len(reviews)
        )

    except Exception as error:

        print(
            "Flipkart scraping error:",
            error
        )

    finally:

        try:
            driver.quit()
        except Exception:
            pass

    return reviews