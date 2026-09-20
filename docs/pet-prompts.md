# 望归 · Lunar 制作提示词

使用内置 imagegen。壁纸仅用于纸感与配色，canonical-base 用于角色一致性，layout-guides 仅用于帧布局。

本页保留原始视觉提示词的完整正文，包括当时规划的 `running-left` 提示词。实际发布的左行序列由右行序列逐帧水平镜像派生，保持帧序；没有另生成左行源条带。保留该提示词是为了记录设计意图，不表示它被单独执行。

可公开的源图位于 [source-strips](../pet/source-strips/)，包含 `base-pet.png` 和八个 `*-source.png` 动画条带。提示词中的 canonical base 对应角色基准；layout guide 是生成时的帧布局参考，未作为本仓库交付文件提供。模板虽包含色键背景描述，实际选定源图已带真实透明通道；提示词是制作设计记录，不保证逐字重新运行会产生相同结果。

## base

Create one clean full-body reference sprite for Codex pet 望归 · Lunar.

Pet identity: A single original tiny chibi astronaut named Lunar, large round helmet about 42 percent of full-body height, matte warm-ivory suit, warm-gray boots and gloves, thin antique-gold visor rim, deep muted Earth-blue opaque visor with a soft small pale blue reflection, no visible human face. Short rounded limbs, compact centered life-support backpack, small symmetrical rectangular chest console with three simple blue buttons integrated into the suit. No flags, logos, letters, detached props, handheld objects, antenna, or loose hoses. Front three-quarter view facing slightly right in the canonical pose, both hands resting, feet planted, quiet curious body language. The wallpaper is a palette and mood reference only: do not copy the moon terrain or Earth background..
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `painterly`: Painterly mascot with simplified brush texture, readable forms, stable palette, and enough edge clarity for clean extraction. User style notes: Restrained graphite-and-gouache paper illustration matching the Moonlit Earth wallpaper; warm ivory, warm gray, muted Earth-blue and small antique-gold details; clean readable outline and opaque silhouette, texture only inside the body, no paper rectangle, no thick sticker border..


Place a single centered pose on a perfectly flat pure user-selected #FF00FF chroma-key background. Keep the full pet visible, compact, readable at 192x208, and easy to animate. Preserve approved reference identity cues. No scenery, text, borders, checkerboard transparency, shadows, glows, detached effects, or extra props. Keep #FF00FF and close colors out of the pet, props, highlights, and effects.


## idle

Create one horizontal animation strip for Codex pet `wanggui-lunar`, state `idle`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 6 full-body frames in one left-to-right row on flat pure user-selected #FF00FF. Treat the row as 6 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: A single original tiny chibi astronaut named Lunar, large round helmet about 42 percent of full-body height, matte warm-ivory suit, warm-gray boots and gloves, thin antique-gold visor rim, deep muted Earth-blue opaque visor with a soft small pale blue reflection, no visible human face. Short rounded limbs, compact centered life-support backpack, small symmetrical rectangular chest console with three simple blue buttons integrated into the suit. No flags, logos, letters, detached props, handheld objects, antenna, or loose hoses. Front three-quarter view facing slightly right in the canonical pose, both hands resting, feet planted, quiet curious body language. The wallpaper is a palette and mood reference only: do not copy the moon terrain or Earth background.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `painterly`: Painterly mascot with simplified brush texture, readable forms, stable palette, and enough edge clarity for clean extraction. User style notes: Restrained graphite-and-gouache paper illustration matching the Moonlit Earth wallpaper; warm ivory, warm gray, muted Earth-blue and small antique-gold details; clean readable outline and opaque silhouette, texture only inside the body, no paper rectangle, no thick sticker border..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Calm low-distraction resting loop: Lunar gently breathes, shoulders rise and settle a little, helmet tilts upward by a few degrees as if quietly watching distant Earth. Keep the opaque visor without a face. Feet planted, hands resting, no new Earth or other object. Make six genuinely distinct but subtle consecutive poses returning to the initial pose.

State requirements:
- CRITICAL: idle is the low-distraction baseline state and the first frame is also used as the reduced-motion static pet.
- Use only subtle idle motion: gentle breathing, a tiny blink, a slight head or body bob, a very small material sway, or another quiet motion that fits the pet persona.
- Keep the pet essentially in the same pose, facing direction, silhouette, markings, palette, and prop state across all 6 frames.
- Idle variation must stay calm but still read as animation; do not repeat effectively identical copies across the loop.
- Do not show waving, walking, running, jumping, talking, working, reviewing, emotional reactions, large gestures, item interactions, or new props.
- Feet, base, body, or object anchor should remain planted or nearly planted.
- The first and last frames should be very close visually so the loop feels calm and does not pop.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## running-right

Create one horizontal animation strip for Codex pet `wanggui-lunar`, state `running-right`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 8 full-body frames in one left-to-right row on flat pure user-selected #FF00FF. Treat the row as 8 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: A single original tiny chibi astronaut named Lunar, large round helmet about 42 percent of full-body height, matte warm-ivory suit, warm-gray boots and gloves, thin antique-gold visor rim, deep muted Earth-blue opaque visor with a soft small pale blue reflection, no visible human face. Short rounded limbs, compact centered life-support backpack, small symmetrical rectangular chest console with three simple blue buttons integrated into the suit. No flags, logos, letters, detached props, handheld objects, antenna, or loose hoses. Front three-quarter view facing slightly right in the canonical pose, both hands resting, feet planted, quiet curious body language. The wallpaper is a palette and mood reference only: do not copy the moon terrain or Earth background.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `painterly`: Painterly mascot with simplified brush texture, readable forms, stable palette, and enough edge clarity for clean extraction. User style notes: Restrained graphite-and-gouache paper illustration matching the Moonlit Earth wallpaper; warm ivory, warm gray, muted Earth-blue and small antique-gold details; clean readable outline and opaque silhouette, texture only inside the body, no paper rectangle, no thick sticker border..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Dragging-right loop: show directional movement to the right through body and limb poses only.

State requirements:
- Show directional drag movement to the right through body, limb, and prop movement only.
- The row must unmistakably face and travel right.
- The movement cadence must alternate visibly across the 8 frames instead of repeating one nearly static stride.
- Do not draw speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## running-left

Create one horizontal animation strip for Codex pet `wanggui-lunar`, state `running-left`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 8 full-body frames in one left-to-right row on flat pure user-selected #FF00FF. Treat the row as 8 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: A single original tiny chibi astronaut named Lunar, large round helmet about 42 percent of full-body height, matte warm-ivory suit, warm-gray boots and gloves, thin antique-gold visor rim, deep muted Earth-blue opaque visor with a soft small pale blue reflection, no visible human face. Short rounded limbs, compact centered life-support backpack, small symmetrical rectangular chest console with three simple blue buttons integrated into the suit. No flags, logos, letters, detached props, handheld objects, antenna, or loose hoses. Front three-quarter view facing slightly right in the canonical pose, both hands resting, feet planted, quiet curious body language. The wallpaper is a palette and mood reference only: do not copy the moon terrain or Earth background.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `painterly`: Painterly mascot with simplified brush texture, readable forms, stable palette, and enough edge clarity for clean extraction. User style notes: Restrained graphite-and-gouache paper illustration matching the Moonlit Earth wallpaper; warm ivory, warm gray, muted Earth-blue and small antique-gold details; clean readable outline and opaque silhouette, texture only inside the body, no paper rectangle, no thick sticker border..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Dragging-left loop: show directional movement to the left through body and limb poses only.

State requirements:
- Show directional drag movement to the left through body, limb, and prop movement only.
- The row must unmistakably face and travel left.
- The movement cadence must alternate visibly across the 8 frames instead of repeating one nearly static stride.
- Do not draw speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## waving

Create one horizontal animation strip for Codex pet `wanggui-lunar`, state `waving`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 4 full-body frames in one left-to-right row on flat pure user-selected #FF00FF. Treat the row as 4 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: A single original tiny chibi astronaut named Lunar, large round helmet about 42 percent of full-body height, matte warm-ivory suit, warm-gray boots and gloves, thin antique-gold visor rim, deep muted Earth-blue opaque visor with a soft small pale blue reflection, no visible human face. Short rounded limbs, compact centered life-support backpack, small symmetrical rectangular chest console with three simple blue buttons integrated into the suit. No flags, logos, letters, detached props, handheld objects, antenna, or loose hoses. Front three-quarter view facing slightly right in the canonical pose, both hands resting, feet planted, quiet curious body language. The wallpaper is a palette and mood reference only: do not copy the moon terrain or Earth background.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `painterly`: Painterly mascot with simplified brush texture, readable forms, stable palette, and enough edge clarity for clean extraction. User style notes: Restrained graphite-and-gouache paper illustration matching the Moonlit Earth wallpaper; warm ivory, warm gray, muted Earth-blue and small antique-gold details; clean readable outline and opaque silhouette, texture only inside the body, no paper rectangle, no thick sticker border..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Greeting loop: paw or limb down, raised, tilted, and returning in a friendly attention gesture.

State requirements:
- Show the greeting through paw, hand, wing, or limb pose only.
- Do not draw wave marks, motion arcs, lines, sparkles, symbols, or floating effects around the gesture.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## jumping

Create one horizontal animation strip for Codex pet `wanggui-lunar`, state `jumping`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 5 full-body frames in one left-to-right row on flat pure user-selected #FF00FF. Treat the row as 5 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: A single original tiny chibi astronaut named Lunar, large round helmet about 42 percent of full-body height, matte warm-ivory suit, warm-gray boots and gloves, thin antique-gold visor rim, deep muted Earth-blue opaque visor with a soft small pale blue reflection, no visible human face. Short rounded limbs, compact centered life-support backpack, small symmetrical rectangular chest console with three simple blue buttons integrated into the suit. No flags, logos, letters, detached props, handheld objects, antenna, or loose hoses. Front three-quarter view facing slightly right in the canonical pose, both hands resting, feet planted, quiet curious body language. The wallpaper is a palette and mood reference only: do not copy the moon terrain or Earth background.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `painterly`: Painterly mascot with simplified brush texture, readable forms, stable palette, and enough edge clarity for clean extraction. User style notes: Restrained graphite-and-gouache paper illustration matching the Moonlit Earth wallpaper; warm ivory, warm gray, muted Earth-blue and small antique-gold details; clean readable outline and opaque silhouette, texture only inside the body, no paper rectangle, no thick sticker border..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Hover jump loop: anticipation, lift, airborne peak, descent, and settle through body height.

State requirements:
- Show the jump through pose and vertical body position only: anticipation, lift, airborne peak, descent, settle.
- Do not draw ground shadows, contact shadows, drop shadows, oval shadows, landing marks, dust, smears, bounce pads, or motion marks under the pet.
- Keep the background outside the pet perfectly flat chroma key with no darker key-colored patches.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## failed

Create one horizontal animation strip for Codex pet `wanggui-lunar`, state `failed`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 8 full-body frames in one left-to-right row on flat pure user-selected #FF00FF. Treat the row as 8 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: A single original tiny chibi astronaut named Lunar, large round helmet about 42 percent of full-body height, matte warm-ivory suit, warm-gray boots and gloves, thin antique-gold visor rim, deep muted Earth-blue opaque visor with a soft small pale blue reflection, no visible human face. Short rounded limbs, compact centered life-support backpack, small symmetrical rectangular chest console with three simple blue buttons integrated into the suit. No flags, logos, letters, detached props, handheld objects, antenna, or loose hoses. Front three-quarter view facing slightly right in the canonical pose, both hands resting, feet planted, quiet curious body language. The wallpaper is a palette and mood reference only: do not copy the moon terrain or Earth background.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `painterly`: Painterly mascot with simplified brush texture, readable forms, stable palette, and enough edge clarity for clean extraction. User style notes: Restrained graphite-and-gouache paper illustration matching the Moonlit Earth wallpaper; warm ivory, warm gray, muted Earth-blue and small antique-gold details; clean readable outline and opaque silhouette, texture only inside the body, no paper rectangle, no thick sticker border..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Blocked/failed loop: slumped or deflated reaction with sad or closed eyes.

State requirements:
- Show failure through slumped pose, drooping ears/limbs, closed or sad eyes, and lower body position.
- Tears, small smoke puffs, or tiny stars are allowed only if attached to or overlapping the pet silhouette and kept inside the same frame slot.
- Do not draw red X marks, floating symbols, detached stars, separated smoke clouds, falling tear drops, dust, or other loose effects.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## waiting

Create one horizontal animation strip for Codex pet `wanggui-lunar`, state `waiting`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 6 full-body frames in one left-to-right row on flat pure user-selected #FF00FF. Treat the row as 6 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: A single original tiny chibi astronaut named Lunar, large round helmet about 42 percent of full-body height, matte warm-ivory suit, warm-gray boots and gloves, thin antique-gold visor rim, deep muted Earth-blue opaque visor with a soft small pale blue reflection, no visible human face. Short rounded limbs, compact centered life-support backpack, small symmetrical rectangular chest console with three simple blue buttons integrated into the suit. No flags, logos, letters, detached props, handheld objects, antenna, or loose hoses. Front three-quarter view facing slightly right in the canonical pose, both hands resting, feet planted, quiet curious body language. The wallpaper is a palette and mood reference only: do not copy the moon terrain or Earth background.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `painterly`: Painterly mascot with simplified brush texture, readable forms, stable palette, and enough edge clarity for clean extraction. User style notes: Restrained graphite-and-gouache paper illustration matching the Moonlit Earth wallpaper; warm ivory, warm gray, muted Earth-blue and small antique-gold details; clean readable outline and opaque silhouette, texture only inside the body, no paper rectangle, no thick sticker border..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Needs-input loop: Lunar tilts the helmet inquisitively, gently extends one open gloved palm toward the viewer, pauses expectantly, and returns. Patient and calm, clearly asking for a response, no question marks or other symbols.

State requirements:
- Show that Codex needs approval, help, or user input through an expectant asking pose.
- Keep the motion patient and readable, without turning it into ordinary idle or review.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## running

Create one horizontal animation strip for Codex pet `wanggui-lunar`, state `running`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 6 full-body frames in one left-to-right row on flat pure user-selected #FF00FF. Treat the row as 6 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: A single original tiny chibi astronaut named Lunar, large round helmet about 42 percent of full-body height, matte warm-ivory suit, warm-gray boots and gloves, thin antique-gold visor rim, deep muted Earth-blue opaque visor with a soft small pale blue reflection, no visible human face. Short rounded limbs, compact centered life-support backpack, small symmetrical rectangular chest console with three simple blue buttons integrated into the suit. No flags, logos, letters, detached props, handheld objects, antenna, or loose hoses. Front three-quarter view facing slightly right in the canonical pose, both hands resting, feet planted, quiet curious body language. The wallpaper is a palette and mood reference only: do not copy the moon terrain or Earth background.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `painterly`: Painterly mascot with simplified brush texture, readable forms, stable palette, and enough edge clarity for clean extraction. User style notes: Restrained graphite-and-gouache paper illustration matching the Moonlit Earth wallpaper; warm ivory, warm gray, muted Earth-blue and small antique-gold details; clean readable outline and opaque silhouette, texture only inside the body, no paper rectangle, no thick sticker border..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Working loop: Lunar looks down and uses one gloved hand to press the three buttons on the existing small chest-mounted console, then briefly checks it and repeats. Keep the same console integrated into the suit, with no new handheld device or screen. Feet planted; this is focused work, not literal foot-running or traveling.

State requirements:
- Show the pet actively working or processing, as if running a task: focused posture, busy hands or paws, purposeful bobbing, thinking motion, tool or prop motion only if already part of the pet identity, or other non-locomotion activity.
- Do not show literal foot-running, jogging, sprinting, treadmill motion, raised knees, long steps, pumping arms, directional travel, speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.


## review

Create one horizontal animation strip for Codex pet `wanggui-lunar`, state `review`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 6 full-body frames in one left-to-right row on flat pure user-selected #FF00FF. Treat the row as 6 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: A single original tiny chibi astronaut named Lunar, large round helmet about 42 percent of full-body height, matte warm-ivory suit, warm-gray boots and gloves, thin antique-gold visor rim, deep muted Earth-blue opaque visor with a soft small pale blue reflection, no visible human face. Short rounded limbs, compact centered life-support backpack, small symmetrical rectangular chest console with three simple blue buttons integrated into the suit. No flags, logos, letters, detached props, handheld objects, antenna, or loose hoses. Front three-quarter view facing slightly right in the canonical pose, both hands resting, feet planted, quiet curious body language. The wallpaper is a palette and mood reference only: do not copy the moon terrain or Earth background.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `painterly`: Painterly mascot with simplified brush texture, readable forms, stable palette, and enough edge clarity for clean extraction. User style notes: Restrained graphite-and-gouache paper illustration matching the Moonlit Earth wallpaper; warm ivory, warm gray, muted Earth-blue and small antique-gold details; clean readable outline and opaque silhouette, texture only inside the body, no paper rectangle, no thick sticker border..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Ready-review loop: Lunar calmly leans the helmet toward the existing chest console, rests one hand on the chest while inspecting, then lifts the head with a small confident nod. Distinct from busy button-pressing work and open-palm waiting; no new props.

State requirements:
- Show review through lean, blink, narrowed eyes, head tilt, or paw/hand position.
- Do not add magnifying glasses, papers, code, UI, punctuation, symbols, or other new props unless they already exist in the base pet identity.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.
