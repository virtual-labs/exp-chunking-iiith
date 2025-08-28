**1.** Given the sentence "The small red car quickly drove through the busy street", perform chunking analysis:

A. First apply POS tagging to each word
B. Identify potential noun phrases using the pattern `{<DT>?<JJ>*<NN>}`
C. Identify verb phrases and prepositional phrases
D. Write the final chunked representation using bracket notation

**2.** Create regular expression patterns for the following chunk types:

A. Noun phrases that start with possessive pronouns (my, his, her, their)
B. Verb phrases containing auxiliary verbs followed by main verbs  
C. Prepositional phrases starting with common prepositions (in, on, at, by)

Provide example sentences that match each pattern.

**3.** Convert the following chunked sentence into IOB notation:

**Chunked sentence:** [NP The quick brown fox] [VP jumps] [PP over] [NP the lazy dog]

Create a table with columns: Word | POS Tag | Chunk Tag

Assume standard POS tags: DT (determiner), JJ (adjective), NN (noun), VBZ (verb), IN (preposition).

**4.** Analyze the ambiguity in the following sentences and explain different possible chunking interpretations:

    Sentence 1: "I bought the book on machine learning"
    Sentence 2: "The student with the laptop studies programming"

For each sentence, provide two different chunking analyses and explain which interpretation is more likely and why.

**5.** Design a chunking grammar using NLTK patterns for the following requirements:

**Target patterns:**

- Company names: "Apple Inc.", "Microsoft Corporation"
- Time expressions: "last Monday", "next week", "3 PM"
- Location phrases: "in New York", "at the university"

A. Write regular expression patterns for each type
B. Test your patterns on sample sentences
C. Identify any limitations or edge cases in your patterns
