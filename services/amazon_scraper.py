from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

import time


def scrape_amazon(url):

    options = webdriver.ChromeOptions()

    options.add_argument("--start-maximized")

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options
    )

    reviews = []

    try:

        driver.get(url)

        time.sleep(5)

        review_elements = driver.find_elements(
            By.CSS_SELECTOR,
            "[data-hook='review-body']"
        )

        for element in review_elements[:50]:

            review_text = element.text.strip()

            if review_text:

                reviews.append(review_text)

    except Exception as error:

        print("Amazon scraping error:", error)

    finally:

        driver.quit()

    return reviews