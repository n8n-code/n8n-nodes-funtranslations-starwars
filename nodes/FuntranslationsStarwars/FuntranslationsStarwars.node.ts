import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class FuntranslationsStarwars implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Funtranslations Starwars',
                name: 'N8nDevFuntranslationsStarwars',
                icon: { light: 'file:./funtranslations-starwars.png', dark: 'file:./funtranslations-starwars.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Funtranslations Star Wars API integrates Star Wars language translations into workflows or apps.',
                defaults: { name: 'Funtranslations Starwars' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFuntranslationsStarwarsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
