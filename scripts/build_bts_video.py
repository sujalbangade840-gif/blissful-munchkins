import os
import subprocess
import json

def create_bts_video():
    work_dir = "/tmp/bts_render"
    os.makedirs(work_dir, exist_ok=True)
    
    # 4 Scenes corresponding to the uploaded 33s video
    scenes = [
        {
            "id": "scene1",
            "duration": 8,
            "badge": "OUTDOOR GARDEN SHOOT • NAGPUR",
            "title": "Boho Macrame Tent & Toys",
            "photographer": "Behind The Scenes with Ashwin Bangade",
            "sub": "Setting up the playful corner on the green lawn with safe, sanitized toys & cozy teepee",
            "highlight": "Blue Ride-On Car • Plush Bunnies • Bohemian Teepee",
            "time_badge": "00:00 - 00:08",
            "bg_color": "#1B4332",
            "accent": "#FF7893",
            "card_bg": "#2D6A4F",
            "icon": "🎪"
        },
        {
            "id": "scene2",
            "duration": 8,
            "badge": "CANDID FAMILY INTERACTIONS",
            "title": "Family Clapping & Cheering",
            "photographer": "Ashwin Framing Natural Smiles",
            "sub": "Mom, dad & family singing together beside Ashwin to keep baby joyful and carefree",
            "highlight": "Gentle White Noise & Music • Zero Stress • Genuine Laughter",
            "time_badge": "00:08 - 00:16",
            "bg_color": "#2C3E50",
            "accent": "#F39C12",
            "card_bg": "#34495E",
            "icon": "👏"
        },
        {
            "id": "scene3",
            "duration": 8,
            "badge": "TODDLER MILESTONE ADVENTURES",
            "title": "Wooden Tricycle Cruising",
            "photographer": "Ashwin at Eye-Level with Baby",
            "sub": "Baby riding the handcrafted wooden trike with monkey plushie along the park walkway",
            "highlight": "Natural Movement • Child-Led Pacing • Patient Guidance",
            "time_badge": "00:16 - 00:24",
            "bg_color": "#4A2810",
            "accent": "#E67E22",
            "card_bg": "#6E3B1B",
            "icon": "🚲"
        },
        {
            "id": "scene4",
            "duration": 9,
            "badge": "INSTANT CAMERA REVIEW",
            "title": "Showing Previews to Parents",
            "photographer": "11+ Years Experience • 696+ Baby Shoots",
            "sub": "Ashwin showing the golden-hour captures to parents right on his camera screen in Nagpur",
            "highlight": "Mother Lifts Baby • Family Hugs • Precious Lifelong Memories",
            "time_badge": "00:24 - 00:33",
            "bg_color": "#3D0C2A",
            "accent": "#FF7893",
            "card_bg": "#5C1D42",
            "icon": "📸"
        }
    ]
    
    video_parts = []
    
    for i, s in enumerate(scenes):
        svg_path = f"{work_dir}/scene_{i}.svg"
        part_mp4 = f"{work_dir}/part_{i}.mp4"
        
        svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="720" height="1280" viewBox="0 0 720 1280">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{s['bg_color']}" />
      <stop offset="100%" stop-color="{s['card_bg']}" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF7893" />
      <stop offset="100%" stop-color="#FFB3C1" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />

  <!-- Soft ambient circles -->
  <circle cx="600" cy="200" r="280" fill="{s['accent']}" opacity="0.15" />
  <circle cx="100" cy="1100" r="320" fill="#FF7893" opacity="0.12" />

  <!-- Top Header Bar -->
  <rect x="40" y="50" width="640" height="70" rx="35" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
  <text x="70" y="93" fill="#FFFFFF" font-size="22" font-weight="bold" font-family="sans-serif">BLISSFUL MUNCHKINS</text>
  <text x="630" y="93" fill="{s['accent']}" font-size="18" font-weight="bold" text-anchor="end" font-family="sans-serif">BTS REEL • {s['time_badge']}</text>

  <!-- Central Visual Card -->
  <g filter="url(#shadow)">
    <rect x="50" y="160" width="620" height="780" rx="40" fill="#0D1B2A" fill-opacity="0.75" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="2" />
    
    <!-- Category Badge -->
    <rect x="90" y="210" width="340" height="40" rx="20" fill="url(#badgeGrad)" />
    <text x="260" y="236" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif" letter-spacing="1">{s['badge']}</text>

    <!-- Scene Icon Graphic Circle -->
    <circle cx="360" cy="370" r="90" fill="{s['card_bg']}" stroke="{s['accent']}" stroke-width="4" />
    <text x="360" y="395" font-size="70" text-anchor="middle" font-family="sans-serif">{s['icon']}</text>

    <!-- Main Titles -->
    <text x="360" y="520" fill="#FFFFFF" font-size="34" font-weight="bold" text-anchor="middle" font-family="sans-serif">{s['title']}</text>
    <text x="360" y="565" fill="{s['accent']}" font-size="20" font-weight="bold" text-anchor="middle" font-family="sans-serif">{s['photographer']}</text>

    <!-- Divider -->
    <line x1="120" y1="605" x2="600" y2="605" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1.5" />

    <!-- Description Text -->
    <text x="360" y="650" fill="#E0E1DD" font-size="18" text-anchor="middle" font-family="sans-serif">
      <tspan x="360" dy="0">{s['sub'][:42]}</tspan>
      <tspan x="360" dy="30">{s['sub'][42:85]}</tspan>
      <tspan x="360" dy="30">{s['sub'][85:]}</tspan>
    </text>

    <!-- Highlight Box -->
    <rect x="90" y="770" width="540" height="110" rx="24" fill="#FFFFFF" fill-opacity="0.08" stroke="{s['accent']}" stroke-opacity="0.4" />
    <text x="360" y="815" fill="#FFB3C1" font-size="15" font-weight="bold" text-anchor="middle" font-family="sans-serif" letter-spacing="1">KEY MOMENTS CAUGHT ON CAMERA</text>
    <text x="360" y="850" fill="#FFFFFF" font-size="16" text-anchor="middle" font-family="sans-serif">{s['highlight']}</text>
  </g>

  <!-- Bottom Details & Trust Signals -->
  <rect x="50" y="980" width="620" height="230" rx="30" fill="#000000" fill-opacity="0.4" stroke="#FFFFFF" stroke-opacity="0.1" />
  
  <text x="90" y="1030" fill="{s['accent']}" font-size="20" font-weight="bold" font-family="sans-serif">By Ashwin Bangade</text>
  <text x="90" y="1065" fill="#FFFFFF" font-size="16" font-family="sans-serif">11+ Years Experience • 696+ Baby Shoots in Nagpur</text>
  
  <rect x="90" y="1100" width="540" height="70" rx="20" fill="{s['accent']}" />
  <text x="360" y="1144" fill="#FFFFFF" font-size="19" font-weight="bold" text-anchor="middle" font-family="sans-serif">Book Your Outdoor Session • WhatsApp / Call</text>

  <!-- Progress Indicators -->
  <g transform="translate(180, 1235)">
    <rect x="0" y="0" width="70" height="6" rx="3" fill="{'#FF7893' if i==0 else '#FFFFFF'}" fill-opacity="{'1' if i==0 else '0.3'}" />
    <rect x="90" y="0" width="70" height="6" rx="3" fill="{'#FF7893' if i==1 else '#FFFFFF'}" fill-opacity="{'1' if i==1 else '0.3'}" />
    <rect x="180" y="0" width="70" height="6" rx="3" fill="{'#FF7893' if i==2 else '#FFFFFF'}" fill-opacity="{'1' if i==2 else '0.3'}" />
    <rect x="270" y="0" width="70" height="6" rx="3" fill="{'#FF7893' if i==3 else '#FFFFFF'}" fill-opacity="{'1' if i==3 else '0.3'}" />
  </g>
</svg>'''
        with open(svg_path, "w", encoding="utf-8") as f:
            f.write(svg_content)
            
        # Convert SVG to an MP4 video clip with ffmpeg
        dur = s['duration']
        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", svg_path,
            "-t", str(dur),
            "-vf", "fps=25,format=yuv420p",
            "-c:v", "libx264",
            "-preset", "fast",
            "-crf", "22",
            part_mp4
        ]
        subprocess.run(cmd, check=True)
        video_parts.append(part_mp4)

    # Concat file
    concat_txt = f"{work_dir}/concat.txt"
    with open(concat_txt, "w") as f:
        for p in video_parts:
            f.write(f"file '{p}'\n")

    # Generate synthesized background music chords with ffmpeg
    # Gentle, warm melodic rhythm with 33 seconds duration
    audio_path = f"{work_dir}/soundtrack.aac"
    synth_cmd = [
        "ffmpeg", "-y",
        "-f", "lavfi",
        "-i", "anoisesrc=d=33:c=pink:r=44100:a=0.015",
        "-f", "lavfi",
        "-i", "sine=f=261.63:d=33,volume=0.15", # C4
        "-f", "lavfi",
        "-i", "sine=f=329.63:d=33,volume=0.12", # E4
        "-f", "lavfi",
        "-i", "sine=f=392.00:d=33,volume=0.12", # G4
        "-filter_complex", "[0:a][1:a][2:a][3:a]amix=inputs=4:duration=longest[aout]",
        "-map", "[aout]",
        "-c:a", "aac",
        "-b:a", "128k",
        audio_path
    ]
    subprocess.run(synth_cmd, check=True)

    final_output = "public/videos/bts-ashwin-outdoor-garden.mp4"
    merge_cmd = [
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0", "-i", concat_txt,
        "-i", audio_path,
        "-c:v", "copy",
        "-c:a", "aac",
        "-shortest",
        final_output
    ]
    subprocess.run(merge_cmd, check=True)

    # Also extract the primary poster image for the video
    poster_output = "public/images/bts/bts-outdoor-garden-poster.jpg"
    poster_cmd = [
        "ffmpeg", "-y",
        "-i", final_output,
        "-ss", "00:00:02",
        "-vframes", "1",
        poster_output
    ]
    subprocess.run(poster_cmd, check=True)

    print("Successfully generated BTS video and poster!")

if __name__ == "__main__":
    create_bts_video()
