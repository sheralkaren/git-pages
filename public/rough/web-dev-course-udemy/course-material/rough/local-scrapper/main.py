'''
File to extract names from a web response
'''

import bs4
import csv

def extract_and_save_names(html_file, csv_file_path):
  """Extracts names from a local HTML file and saves them to a CSV file.

  Args:
    html_file: The path to the local HTML file.
    csv_file_path: The path to the output CSV file.
  """
  try:
    with open(html_file, 'r') as f:
      html_content = f.read()
  except FileNotFoundError:
    print(f"Error: File '{html_file}' not found.")
    return
  
  soup = bs4.BeautifulSoup(html_content, 'html.parser')
  names = []
  tags = soup.find_all('a', class_=["roster_user_name", "student_context_card_trigger"])
  for tag in tags:
    if tag.has_attr('previewlistener') and tag.get('previewlistener') == 'true':
      names.append(tag.text.strip())

  # Save names to CSV file
  try:
    with open(csv_file_path, 'w', newline='') as csvfile:
      writer = csv.writer(csvfile)
      writer.writerow(["Name"])  # Header row
      for name in names:
        writer.writerow([name])
  except PermissionError:
    print(f"Error: Permission denied while writing to '{csv_file_path}'.")
  except Exception as e:
    print(f"Error saving names to CSV: {e}")

# Example usage
html_file_path = "./Untitled-1.xml"
csv_file_path = "extracted_names.csv"  # Replace with your desired CSV name

extract_and_save_names(html_file_path, csv_file_path)
print(f"Names saved to CSV file: {csv_file_path}")

