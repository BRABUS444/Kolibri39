
import json
import telebot

API_TOKEN = 'YOUR_BOT_TOKEN'
ADMIN_IDS = [123456789]  # Замените на ваш user_id

bot = telebot.TeleBot(API_TOKEN)

@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, "Добро пожаловать!")

@bot.message_handler(commands=['delete'])
def delete_review(message):
    if message.from_user.id not in ADMIN_IDS:
        bot.send_message(message.chat.id, "У вас нет прав для удаления отзывов.")
        return

    try:
        review_id = int(message.text.split()[1])
    except:
        bot.send_message(message.chat.id, "Формат: /delete <id>")
        return

    with open('reviews.json', 'r', encoding='utf-8') as f:
        reviews = json.load(f)
    reviews = [r for r in reviews if r['id'] != review_id]
    with open('reviews.json', 'w', encoding='utf-8') as f:
        json.dump(reviews, f, ensure_ascii=False, indent=2)
    bot.send_message(message.chat.id, f"Отзыв #{review_id} удалён.")

bot.polling()
