from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def scrape_reviews():

    driver = webdriver.Chrome()

    driver.get("https://quotes.toscrape.com")

    time.sleep(2)

    quotes = driver.find_elements(By.CLASS_NAME, "text")

    reviews = []

    for quote in quotes:
        reviews.append(quote.text)

    driver.quit()

    return reviews