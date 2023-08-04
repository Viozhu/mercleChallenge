export interface MessageCount {
  count: string;
  timeBucket: Date | string;
  channelId: string;
}

export interface Channel {
  label: string;
  value: string;
  type: number;
  guild: string;
  guildId: string;
  parentId?: string | null | undefined;
  permissionOverwrites: string[];
  messages?: string[] | undefined;
  threads?: string[] | undefined;
  nsfw?: boolean;
  id: string;
  name: string;
  rawPosition: string | number;
  topic?: string | null | undefined;
  lastMessageId?: string | null | undefined;
  rateLimitPerUser?: string | number;
  createdTimestamp: string | number;
}
