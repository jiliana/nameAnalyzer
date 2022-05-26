# Name Analyzer API
The Name Analyzer API takes the user's name and year of birth, then provides a descriptive breakdown of the user's 5 personality traits: extraversion, oppenness, aggreeableness, conscientiousness, and  neuroticism.

This API's algorithm is based off of Zodiac sign astrology and name phonology (how words sound). 

As of right now, there are 288 possible output combinations. This can be easily increased by adding more descriptions and strength levels to each trait.


## How to use
1. Run `node src/server.js`
2. There are 2 ways to analyze:
    * Using a web tool, GET`http://localhost:3000/{birthyear}/{name}`
    * Using a browser, go to `http://localhost:3000/` and use the form to submit your query
4. Outputs a JSON file. Description in header "description".

## Output Description
- Trait Values: numeric values of each personality trait 
(0 to 1 is low, >1 is high)
- Description: analysis based off of Trait Values

## Example
Request:
`http://localhost:3000/2002/Jiliana`
* birthyear = 2002
* name = Jiliana

Response:

`{
    "name": "Jiliana",
    "birthyear": "2002",
    "zodiac": "Horse",
    "extraversion": "1.8",
    "oppenness": "3.2",
    "aggreableness": "2.2",
    "conscientiousness": "1.1",
    "neuroticism": "2.2",
    "description": "You seek out novelty and excitement, and enjoy being the center of attention. You tend to seek out social interaction because this is how you feel more energized. One of your favorite pastimes is attending concerts or conventions. You are imaginative, rather than practical. You are known to be creative, open to new and different ideas, and in touch with your feelings. In school, you did particularly well in visual arts. You find it important to get along with others. You are willing to put aside your interests for other people. People think you are helpful, friendly, considerate, and generous. You have a high level of self-discipline. You prefer to follow a plan, rather than act spontaneously. You are very emotionally reactive, and may find it difficult to think clearly and cope with stress."
}`

## Credits

Descriptions and Research:

https://www.simplypsychology.org/

https://www.123test.com/

https://www.chinahighlights.com/travelguide/chinese-zodiac/

