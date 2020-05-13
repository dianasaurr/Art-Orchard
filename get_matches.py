import requests
from PIL import Image
from io import BytesIO

def get_url(id):
    return "https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/" + id + ".jpg"

def get_image(id):
    response = requests.get(get_url(id))
    img = Image.open(BytesIO(response.content))
    return img

def make_request(id, n=5):
    r = requests.post(
        "https://extern2020apim.azure-api.net/cknn/",

        json = {
            "url": get_url(id),
            # "query":"drawings",
            "n": n
        })

    try:
        results = r.json()["results"]#[0][0]["Thumbnail_Url"])
        return results
    except:
        print(r.json())

# returns matches by [(id, url)]
def get_matches(id, n=5):
    results = make_request(id, n)

    matches = []
    for result in results:
        matches.append(result[0]['id'])

    return matches

def search(id, depth, n=5):
    queue = [id]
    visited = set()

    if depth == 0:
        return queue

    while depth > 0:
        neighbors = []
        for match in queue:
            matches = get_matches(match, n)
            neighbors.extend(matches[n-3:])

        visited.update(queue)
        queue = list(set(neighbors) - visited)
        depth -= 1
    
    return queue

def find_id(distance):
    fp = "art_data.json"
    with open(fp, "r") as f:
        # data = json.load(f)
        f.seek(distance)
        # print(f.readline())
        print(f.read(100))

def get_concat_h_blank(im1, im2, color=(0, 0, 0)):
    dst = Image.new('RGB', (im1.width + im2.width, max(im1.height, im2.height)), color)
    dst.paste(im1, (0, 0))
    dst.paste(im2, (im1.width, 0))
    return dst

def get_concat_h_multi_blank(im_list):
    _im = im_list.pop(0)
    for im in im_list:
        _im = get_concat_h_blank(_im, im)
    return _im

def show_all_images(results):
    ims = []
    for res in results:
        im = get_image(res)
        ims.append(im)

    all = get_concat_h_multi_blank(ims)
    all.show()

# dist = 20000
# find_id(dist)

# id = "RP-P-1922-455"
# results = search(id, 4, 7)
# print(results)

# get_image(id).show()
# show_all_images(results)
# for res in results:
#     print(res)
#     view_image(res)
#     input("Press Enter to continue...")

pairs = [
    ("AK-MAK-1153", 'NG-VG-5-105'),
    ("RP-P-2013-39-2-1-14", "NG-1972-28-31-D"),
    ("BK-NM-14365-B", 'RP-F-F01047-S'),
    ("RP-P-1955-566", 'RP-F-00-5345-69'),
    ("AK-MAK-1204", 'BK-1976-16'),
    ("AK-NM-13760-B", 'BK-1968-239-2'),
    ("RP-P-1922-455", 'RP-P-2009-2288')
]
# new_pairs = []

# for start, end in pairs:
#     start_matches = get_matches(start, 1)
#     start_result = make_request(start_matches[0], 1)

#     end_matches = get_matches(end, 1)
#     end_result = make_request(end_matches[0], 1)

#     new_pair = [start_result[0][0], end_result[0][0]]
#     new_pairs.append(new_pair)

# print(new_pairs)

id = "RP-P-1955-566"
start_matches = get_matches(id, 1)
start_result = make_request(start_matches[0], 46)
print(start_result[35:45])

'''
Response format
[
    [
        {
            "id":"RP-T-1969-593",
            "Title":"Liervogel",
            "Artist":"Carel Adolph Lion Cachet",
            "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/RP-T-1969-593.jpg",
            "Image_Url":"https://lh3.googleusercontent.com/61X6n7YjWKakDQEwHjPzUyHL2FAcSZ78Q-c0yfQhU0jwQaZKKsA9n083FypPpPwvsVh0OTZcH-a82n7aFvzjEG2YzSQ=s0",
            "Culture":"dutch",
            "Classification":"drawings",
            "Museum_Page":"https://www.rijksmuseum.nl/en/collection/RP-T-1969-593",
            "Museum":"rijks"
        },
        edge_weight
    ],
    ...
]
'''