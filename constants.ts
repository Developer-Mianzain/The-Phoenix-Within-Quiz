
import type { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    key: 'challenge',
    question: 'When a great challenge rises before you, how do you meet it?',
    answers: [
      { text: 'Head-on, with fiery determination.', value: 'direct' },
      { text: 'With a careful plan, analyzing every angle.', value: 'strategic' },
      { text: 'By gathering my friends and allies for support.', value: 'collaborative' },
      { text: 'By looking inward for quiet strength and intuition.', value: 'introspective' },
    ],
  },
  {
    key: 'element',
    question: 'Which element do you feel most connected to?',
    answers: [
      { text: 'The flickering, transformative flame of fire.', value: 'fire' },
      { text: 'The deep, empathetic currents of water.', value: 'water' },
      { text: 'The steady, grounding presence of earth.', value: 'earth' },
      { text: 'The free, ever-changing whispers of air.', value: 'air' },
    ],
  },
  {
    key: 'strength_source',
    question: 'Where do you draw your greatest strength from?',
    answers: [
      { text: 'My own unbreakable spirit and resilience.', value: 'inner_self' },
      { text: 'The deep, meaningful connections I have with others.', value: 'community' },
      { text: 'My boundless creativity and imagination.', value: 'creativity' },
      { text: 'My thirst for knowledge and understanding the world.', value: 'knowledge' },
    ],
  },
  {
    key: 'colors',
    question: 'Which color palette calls to your soul?',
    answers: [
      { text: 'Fiery crimson, brilliant gold, and deep orange.', value: 'warm_sunset' },
      { text: 'Cool sapphire, shimmering silver, and midnight blue.', value: 'cool_moonlight' },
      { text: 'Earthy emerald, rich terracotta, and mossy green.', value:'earth_tones' },
      { text: 'Mystical amethyst, soft lavender, and iridescent pearl.', value: 'ethereal_hues' },
    ],
  },
  {
    key: 'quiet_win',
    question: 'What does a "quiet win" feel like to you?',
    answers: [
      { text: 'A moment of profound inner peace and clarity.', value: 'peace' },
      { text: 'The silent, shared understanding with a loved one.', value: 'connection' },
      { text: 'Mastering a difficult skill after dedicated practice.', value: 'mastery' },
      { text: 'Creating something beautiful purely for the joy of it.', value: 'creation' },
    ],
  },
  {
    key: 'sanctuary',
    question: 'Describe your inner sanctuary, a place of perfect peace.',
    answers: [
      { text: 'A library of ancient books, filled with quiet wisdom.', value: 'wisdom_library' },
      { text: 'A sun-drenched meadow bursting with wildflowers.', value: 'vibrant_meadow' },
      { text: 'A cozy hearth in a cabin, shielded from a raging storm.', value: 'cozy_hearth' },
      { text: 'An observatory open to the vast, starry cosmos.', value: 'starry_observatory' },
    ],
  },
  {
    key: 'failure_response',
    question: 'When you experience a setback, what is your first instinct?',
    answers: [
      { text: 'To analyze what went wrong and create a new strategy.', value: 'analyze' },
      { text: 'To seek comfort and advice from those I trust.', value: 'seek_comfort' },
      { text: 'To double down with even more passion and effort.', value: 'reignite' },
      { text: 'To step back and find a completely new path.', value: 'pivot' },
    ],
  },
  {
    key: 'gift',
    question: 'If you could bestow one gift upon the world, what would it be?',
    answers: [
      { text: 'Unwavering empathy and understanding.', value: 'empathy' },
      { text: 'The courage for everyone to pursue their passion.', value: 'courage' },
      { text: 'The spark of boundless creativity to solve any problem.', value: 'creativity_gift' },
      { text: 'A deep sense of peace and harmony with nature.', value: 'harmony' },
    ],
  },
  {
    key: 'time_of_day',
    question: 'Which time of day holds the most magic for you?',
    answers: [
      { text: 'The quiet, hopeful moments of dawn.', value: 'dawn' },
      { text: 'The brilliant, energetic peak of midday.', value: 'midday' },
      { text: 'The soft, reflective colors of twilight.', value: 'twilight' },
      { text: 'The mysterious, dream-filled depths of midnight.', value: 'midnight' },
    ],
  },
  {
    key: 'leadership_style',
    question: 'When leading a group, you are the one who...',
    answers: [
      { text: 'Inspires with a grand vision and infectious energy.', value: 'visionary' },
      { text: 'Ensures everyone feels heard and valued.', value: 'nurturer' },
      { text: 'Makes the tough, logical decisions for the greater good.', value: 'strategist' },
      { text: 'Leads by quiet example and unwavering integrity.', value: 'exemplar' },
    ],
  },
  {
    key: 'secret_knowledge',
    question: 'You\'ve discovered a hidden, ancient knowledge. What do you do?',
    answers: [
      { text: 'Share it freely with everyone who will listen.', value: 'share_freely' },
      { text: 'Protect it, revealing it only to a chosen few.', value: 'protect' },
      { text: 'Use it to bring about a great change in the world.', value: 'catalyze' },
      { text: 'Study it in solitude to understand its full meaning.', value: 'study' },
    ],
  },
  {
    key: 'season',
    question: 'Which season reflects your inner spirit?',
    answers: [
      { text: 'Spring, with its promise of new beginnings.', value: 'spring' },
      { text: 'Summer, full of warmth, adventure, and vibrant life.', value: 'summer' },
      { text: 'Autumn, a time of harvest, reflection, and letting go.', value: 'autumn' },
      { text: 'Winter, with its quiet stillness and hidden strength.', value: 'winter' },
    ],
  },
  {
    key: 'communication_style',
    question: 'How do you prefer to express your deepest thoughts?',
    answers: [
      { text: 'Through passionate, heartfelt conversation.', value: 'spoken_word' },
      { text: 'Through writing, art, or music.', value: 'creative_expression' },
      { text: 'Through thoughtful actions that speak louder than words.', value: 'actions' },
      { text: 'I keep them guarded, sharing only with a select few.', value: 'guarded' },
    ],
  },
  {
    key: 'legacy',
    question: 'What kind of legacy do you hope to leave behind?',
    answers: [
      { text: 'A legacy of joy, laughter, and kindness.', value: 'joy' },
      { text: 'A legacy of wisdom, discovery, and truth.', value: 'wisdom' },
      { text: 'A legacy of change, justice, and revolution.', value: 'justice' },
      { text: 'A legacy of beauty, art, and inspiration.', value: 'beauty' },
    ],
  },
  {
    key: 'adversity_view',
    question: 'How do you view adversity?',
    answers: [
      { text: 'As a fire that forges strength and character.', value: 'forging_fire' },
      { text: 'As a puzzle to be patiently and cleverly solved.', value: 'puzzle' },
      { text: 'As a storm to be weathered with patience and resilience.', value: 'storm' },
      { text: 'As a teacher that reveals hidden truths about myself.', value: 'teacher' },
    ],
  },
  {
    key: 'source_of_joy',
    question: 'What brings you a simple, unshakeable sense of joy?',
    answers: [
      { text: 'Exploring a new place, a new idea, or a new story.', value: 'exploration' },
      { text: 'The feeling of belonging and connection within a community.', value: 'belonging' },
      { text: 'The quiet satisfaction of creating something with my hands.', value: 'creation_joy' },
      { text: 'Helping someone else and seeing them smile.', value: 'helping_others' },
    ],
  },
  {
    key: 'dream_world',
    question: 'In your dreams, you often find yourself...',
    answers: [
      { text: 'Soaring high above the clouds, free from all constraints.', value: 'flying' },
      { text: 'Exploring ancient ruins filled with forgotten secrets.', value: 'exploring_ruins' },
      { text: 'In a bustling, magical city full of diverse people.', value: 'magical_city' },
      { text: 'In a tranquil forest that hums with a gentle energy.', value: 'tranquil_forest' },
    ],
  },
  {
    key: 'guiding_principle',
    question: 'Which principle guides you most?',
    answers: [
      { text: 'Truth: To seek it and speak it, always.', value: 'truth' },
      { text: 'Compassion: To act with kindness and empathy.', value: 'compassion' },
      { text: 'Freedom: To live authentically and unconstrained.', value: 'freedom' },
      { text: 'Balance: To find harmony in all things.', value: 'balance' },
    ],
  },
  {
    key: 'symbol',
    question: 'Which of these symbols resonates most with you?',
    answers: [
      { text: 'An old, gnarled tree with deep roots and sprawling branches.', value: 'tree' },
      { text: 'A compass, always pointing toward a true direction.', value: 'compass' },
      { text: 'A key, capable of unlocking any hidden door.', value: 'key' },
      { text: 'A single, bright star in the darkest night.', value: 'star' },
    ],
  },
  {
    key: 'final_word',
    question: 'Finally, which word describes the future you want to build?',
    answers: [
      { text: 'Brighter.', value: 'brighter' },
      { text: 'Wiser.', value: 'wiser' },
      { text: 'Kinder.', value: 'kinder' },
      { text: 'Bolder.', value: 'bolder' },
    ],
  },
];
