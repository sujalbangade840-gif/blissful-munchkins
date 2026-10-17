import subprocess
import os

def build_video():
    os.makedirs("public/videos", exist_ok=True)
    os.makedirs("public/images/bts", exist_ok=True)
    temp_dir = "/tmp/bts_build"
    os.makedirs(temp_dir, exist_ok=True)

    font_path = "/usr/share/fonts/opentype/urw-base35/NimbusSans-Bold.otf"

    clips = [
        {
            "id": 1,
            "duration": 8,
            "color": "#1F402B",
            "box_color": "#0E2417@0.85",
            "accent": "#FF7893",
            "badge": "OUTDOOR GARDEN SHOOT - NAGPUR",
            "title": "Boho Macrame Tent & Toys",
            "subtitle": "Behind The Scenes with Ashwin Bangade",
            "desc1": "Setting up the playful corner on the green lawn",
            "desc2": "Baby on blue ride-on car with red steering wheel",
            "desc3": "Surrounded by cozy teepee, plush bunnies and toys",
            "tag": "Scene 1 of 4: The Playful Setup",
            "time": "00:00 - 00:08"
        },
        {
            "id": 2,
            "duration": 8,
            "color": "#1C2B3A",
            "box_color": "#0D1822@0.85",
            "accent": "#4EA8DE",
            "badge": "FAMILY CLAPPING & CHEERING",
            "title": "Framing Natural Baby Smiles",
            "subtitle": "Ashwin Bangade Behind The Lens",
            "desc1": "Parents, mom and family clapping and singing",
            "desc2": "Unhurried relaxed pacing keeps baby happy",
            "desc3": "Ashwin capturing spontaneous genuine giggles",
            "tag": "Scene 2 of 4: Family Joy & Laughter",
            "time": "00:08 - 00:16"
        },
        {
            "id": 3,
            "duration": 8,
            "color": "#3B2212",
            "box_color": "#1E1108@0.85",
            "accent": "#F39C12",
            "badge": "TODDLER MILESTONE ADVENTURE",
            "title": "Handcrafted Wooden Trike",
            "subtitle": "Patient Eye-Level Baby Perspectives",
            "desc1": "Baby cruising on custom wooden tricycle",
            "desc2": "Cute monkey plush companion riding along",
            "desc3": "Scenic garden path with lush green trees",
            "tag": "Scene 3 of 4: Garden Pathway Ride",
            "time": "00:16 - 00:24"
        },
        {
            "id": 4,
            "duration": 9,
            "color": "#351428",
            "box_color": "#1A0914@0.85",
            "accent": "#FF7893",
            "badge": "INSTANT CAMERA PREVIEWS",
            "title": "Showing Captures to Parents",
            "subtitle": "11+ Years Experience - 696+ Baby Shoots",
            "desc1": "Ashwin reviewing high-res shots on camera screen",
            "desc2": "Mother lifts smiling baby happily in the air",
            "desc3": "Best Baby Photography in Nagpur - Blissful Munchkins",
            "tag": "Scene 4 of 4: Golden Hour Moments",
            "time": "00:24 - 00:33"
        }
    ]

    part_files = []

    for c in clips:
        part_path = f"{temp_dir}/part_{c['id']}.mp4"
        filters = [
            # Main Header Bar
            f"drawbox=x=40:y=50:w=640:h=60:color=white@0.15:t=fill",
            f"drawtext=fontfile='{font_path}':text='BLISSFUL MUNCHKINS':fontcolor=white:fontsize=22:x=70:y=68",
            f"drawtext=fontfile='{font_path}':text='BTS REEL  {c['time']}':fontcolor='{c['accent']}':fontsize=18:x=650-text_w:y=70",

            # Main Dark Content Card
            f"drawbox=x=50:y=140:w=620:h=780:color={c['box_color']}:t=fill",
            f"drawbox=x=50:y=140:w=620:h=780:color=white@0.15:t=2",

            # Badge pill
            f"drawbox=x=90:y=180:w=540:h=46:color='{c['accent']}':t=fill",
            f"drawtext=fontfile='{font_path}':text='{c['badge']}':fontcolor=white:fontsize=16:x=(w-text_w)/2:y=194",

            # Title & Subtitle
            f"drawtext=fontfile='{font_path}':text='{c['title']}':fontcolor=white:fontsize=32:x=(w-text_w)/2:y=260",
            f"drawtext=fontfile='{font_path}':text='{c['subtitle']}':fontcolor='{c['accent']}':fontsize=19:x=(w-text_w)/2:y=310",

            # Divider
            f"drawbox=x=120:y=355:w=480:h=2:color=white@0.2:t=fill",

            # Tag
            f"drawbox=x=120:y=380:w=480:h=36:color=white@0.08:t=fill",
            f"drawtext=fontfile='{font_path}':text='{c['tag']}':fontcolor=white:fontsize=15:x=(w-text_w)/2:y=390",

            # Descriptions
            f"drawtext=fontfile='{font_path}':text='{c['desc1']}':fontcolor=white@0.95:fontsize=20:x=(w-text_w)/2:y=460",
            f"drawtext=fontfile='{font_path}':text='{c['desc2']}':fontcolor=white@0.95:fontsize=20:x=(w-text_w)/2:y=510",
            f"drawtext=fontfile='{font_path}':text='{c['desc3']}':fontcolor=white@0.95:fontsize=20:x=(w-text_w)/2:y=560",

            # Highlight Box
            f"drawbox=x=90:y=630:w=540:h=240:color=white@0.06:t=fill",
            f"drawbox=x=90:y=630:w=540:h=240:color='{c['accent']}@0.4':t=2",
            f"drawtext=fontfile='{font_path}':text='AUTHENTIC ASHWIN BANGADE SHOOT':fontcolor='{c['accent']}':fontsize=16:x=(w-text_w)/2:y=660",
            f"drawtext=fontfile='{font_path}':text='Baby Boy Outdoor Garden Session':fontcolor=white:fontsize=20:x=(w-text_w)/2:y=710",
            f"drawtext=fontfile='{font_path}':text='Nagpur Maharashtra - Natural Candid Photography':fontcolor=white@0.8:fontsize=15:x=(w-text_w)/2:y=760",
            f"drawtext=fontfile='{font_path}':text='100% Unhurried Baby Comfort & Safety':fontcolor='#A8DADC':fontsize=16:x=(w-text_w)/2:y=810",

            # Bottom CTA Box
            f"drawbox=x=50:y=950:w=620:h=260:color=black@0.4:t=fill",
            f"drawbox=x=50:y=950:w=620:h=260:color=white@0.1:t=2",
            f"drawtext=fontfile='{font_path}':text='Photographer: Ashwin Bangade':fontcolor='{c['accent']}':fontsize=20:x=90:y=980",
            f"drawtext=fontfile='{font_path}':text='11+ Years Experience  696+ Baby Shoots':fontcolor=white:fontsize=16:x=90:y=1020",
            f"drawtext=fontfile='{font_path}':text='Nagpur Studio & Outdoor Garden Sessions':fontcolor=white@0.8:fontsize=14:x=90:y=1055",

            # Action button
            f"drawbox=x=90:y=1100:w=540:h=70:color='{c['accent']}':t=fill",
            f"drawtext=fontfile='{font_path}':text='Book Baby Shoot with Ashwin - WhatsApp / Call':fontcolor=white:fontsize=18:x=(w-text_w)/2:y=1126",

            # Progress Dots
            f"drawbox=x=230:y=1230:w=50:h=6:color={'#FF7893' if c['id']==1 else 'white@0.3'}:t=fill",
            f"drawbox=x=290:y=1230:w=50:h=6:color={'#FF7893' if c['id']==2 else 'white@0.3'}:t=fill",
            f"drawbox=x=350:y=1230:w=50:h=6:color={'#FF7893' if c['id']==3 else 'white@0.3'}:t=fill",
            f"drawbox=x=410:y=1230:w=50:h=6:color={'#FF7893' if c['id']==4 else 'white@0.3'}:t=fill",
        ]

        vf_str = ",".join(filters)
        cmd = [
            "ffmpeg", "-y",
            "-f", "lavfi",
            "-i", f"color=c={c['color']}:s=720x1280:d={c['duration']}",
            "-vf", vf_str,
            "-c:v", "libx264",
            "-preset", "ultrafast",
            "-pix_fmt", "yuv420p",
            part_path
        ]
        subprocess.run(cmd, check=True)
        part_files.append(part_path)

    concat_file = f"{temp_dir}/concat.txt"
    with open(concat_file, "w") as f:
        for p in part_files:
            f.write(f"file '{p}'\n")

    # Audio synthesis with soft ambient musical chords
    audio_path = f"{temp_dir}/audio.aac"
    synth_audio_cmd = [
        "ffmpeg", "-y",
        "-f", "lavfi", "-i", "anoisesrc=d=33:c=pink:r=44100:a=0.01",
        "-f", "lavfi", "-i", "sine=f=261.63:d=33", # C4
        "-f", "lavfi", "-i", "sine=f=329.63:d=33", # E4
        "-f", "lavfi", "-i", "sine=f=392.00:d=33", # G4
        "-filter_complex", "[1:a]volume=0.15[c];[2:a]volume=0.12[e];[3:a]volume=0.12[g];[0:a][c][e][g]amix=inputs=4:duration=longest[aout]",
        "-map", "[aout]",
        "-c:a", "aac",
        "-b:a", "128k",
        audio_path
    ]
    subprocess.run(synth_audio_cmd, check=True)

    final_video = "public/videos/bts-ashwin-outdoor-garden.mp4"
    merge_cmd = [
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0", "-i", concat_file,
        "-i", audio_path,
        "-c:v", "copy",
        "-c:a", "aac",
        "-shortest",
        final_video
    ]
    subprocess.run(merge_cmd, check=True)

    # Extract poster
    poster_path = "public/images/bts/bts-outdoor-garden-poster.jpg"
    poster_cmd = [
        "ffmpeg", "-y",
        "-i", final_video,
        "-ss", "00:00:03",
        "-vframes", "1",
        poster_path
    ]
    subprocess.run(poster_cmd, check=True)

    print("SUCCESS: bts-ashwin-outdoor-garden.mp4 and poster generated cleanly!")

if __name__ == "__main__":
    build_video()
